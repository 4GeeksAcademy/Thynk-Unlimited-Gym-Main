"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Articles, Blogs, Comments
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)





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
    if 'name' not in body:
        raise APIException('Please provide a name', status_code=400)
    if 'email' not in body:
        raise APIException('Please provide an email', status_code=400)
    if 'password' not in body:
        raise APIException('Please provide a password', status_code=400)
    user.name=body['name']
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
    if 'name' in body:
        user.name = body['name']
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

@api.route('/blogs', methods=['GET'])
def get_blogs():
    blogs = Blogs.query.all()
    all_blogs = list(map(lambda x:x.serialize(), blogs))

    return jsonify(all_blogs), 200
    
@api.route('/blogs', methods=['POST'])
def add_blogs(id):
    body = request.get_json()
    blog = Blogs()
    # check if blog exists, and doesn't have a user 
    specificBlog = Blogs.query.get(id)
    print('hello')
    print(specificBlog, 'specific blog')
    print(blog.user_id, 'blog.user_id')

    if 'title' not in body:
        raise APIException('Please provide a name', status_code=400)
    if 'body' not in body:
        raise APIException('Please provide an email', status_code=400)

    if not specificBlog or blog.user_id is not None:
        print('stop in your tracks')

    blog.title=body['title']
    blog.body=body['body']
    db.session.add(blog)
    db.session.commit()
    return jsonify(blog.serialize()), 200
    
@api.route('/blogs/<int:id>', methods=['PUT'])
def update_blogs(id):
    body = request.get_json()
    blog = Blogs.query.get(id)
    if blog is None:
        raise APIException('User not found', status_code=404)
    if 'title' in body:
        blog.title = body['title']
    if 'body' in body:
        blog.body = body['body']
    if 'password' in body:
        blog.password = body['password']
    db.session.commit()
    return jsonify(blog.serialize()), 200
    
@api.route('/blogs/<int:id>', methods=['DELETE'])
def delete_blogs():
    blog = Blogs.query.get(id)
    if blog is None:
        raise APIException('Blog not found', status_code=404)
    db.session.delete(blog)
    db.session.commit()
    return jsonify(blog.serialize()), 200

@api.route('/comments', methods=['POST'])
def add_comments(id):
    comment_body = request.get_json()
    comment = Comments()
    specificComment = Comments.query.get(id)
    print(specificComment, 'specific comment')
    print(comment.user_id, 'comment.user_id')

    if 'comment' not in comment_body:
        raise APIException('Please provide a comment', status_code=400)
    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.serialize()), 200

@api.route('/comments', methods=['GET'])
def get_comments():
    comments = Comments.query.all()
    all_comments = list(map(lambda x:x.serialize(), comments))

    return jsonify(all_comments), 200


@api.route('/comments/<int:id>', methods=['PUT'])
def update_comments(id):
    comment = request.get_json(id)