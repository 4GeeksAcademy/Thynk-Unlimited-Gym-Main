"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Articles
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import stripe


stripe.api_key ="sk_test_51OxUmMEk9vJEdqz3NvQhhz6ljzEDk2C5F4D1Q8Yttz9hs07XFISGpKajCh2VVKVx2GkrJV0aI2iZowBe25NkPrrR00ORG1meAN"

api = Blueprint('api', __name__)

# api = Flask(__name__,
#             static_url_path='',
#             static_folder='public')

YOUR_DOMAIN = 'http://localhost:3000'

# Allow CORS requests to this API
# CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/articles', methods=['GET'])
def get_articles():
    articles= Articles.query.all()
    articles= [article.serialize()for article in articles]
    response_body = {
        "message": "Here is your list of articles",
        "articles": articles
    }

    return jsonify(response_body), 200


@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get('email', None)
    access_token = create_access_token(identity=email)
    
    return jsonify(access_token=access_token)

@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    all_users = list(map(lambda x:x.serialize(), users))

    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/signup', methods=['POST'])
def create_user():
    body = request.get_json()
    user = User()
    if 'email' not in body:
        raise APIException('Please provide an email', status_code=400)
    if 'password' not in body:
        raise APIException('Please provide a password', status_code=400)
    user.email=body['email']
    user.password=body['password']
    user.is_active=True
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    body = request.get_json()
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    if 'email' in body:
        user.email = body['email']
    if 'password' in body:
        user.password = body['password']
    if 'is_active' in body:
        user.is_active = body['is_active']
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def get_private():
    return jsonify({'msg':'This endpoint is private. You must be logged in to see it.'}), 200


@api.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        session = stripe.checkout.Session.create(
            ui_mode = 'embedded',
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': "price_1Oz6bvEk9vJEdqz3UOCnijds",
                    'quantity': 1,
                    
                },
                {
                    'price': 'price_1Oz6pXEk9vJEdqz3saGiNv9G',
                    'quantity': 1,
                },
                {
                    'price': 'price_1Oz6qGEk9vJEdqz3IEdISr6V',
                    'quantity': 1,
                },
            ],
            mode='payment',
            return_url="https://glorious-broccoli-v6vxgpx465v4fxvwg-3001.app.github.dev" + '/return?session_id={CHECKOUT_SESSION_ID}',
        )
    except Exception as e:
        return str(e)

    return jsonify(clientSecret=session.client_secret)

@api.route('/session-status', methods=['GET'])
def session_status():
  session = stripe.checkout.Session.retrieve(request.args.get('session_id'))

  return jsonify(status=session.status, customer_email=session.customer_details.email)

