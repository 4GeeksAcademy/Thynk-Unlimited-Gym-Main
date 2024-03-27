from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

blog_comments = db.Table(
    "blog_comments",
    db.Column("blog_id", db.Integer, db.ForeignKey("blogs.id")),
    db.Column("comment_id", db.Integer, db.ForeignKey("comments.id")),
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=True, unique=True)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    blogs = db.relationship('Blogs', back_populates='user', lazy=True)
    comments = db.relationship('Comments', backref='user', lazy=True)

    def __repr__(self):
        return f'<{self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "blogs": list(map(lambda x: x.serialize(),self.blog))
            # Do not serialize the password, it's a security breach
        }
    
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    url = db.Column(db.String(), nullable=False)
    image_url = db.Column(db.String(), nullable=False)
    button_url = db.Column(db.String(), nullable=False)
    preview = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return f'<Articles {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "url": self.url,
            "image_url": self.image_url,
            "button_url": self.button_url,
            "preview": self.preview,
        }

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(), unique=False, nullable=False)
    blog_id = db.Column(db.Integer, db.ForeignKey('blogs.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # blog = db.relationship('Blogs', backref=db.backref('post_comments', lazy=True))
    # user = db.relationship('User', backref=db.backref('comments', lazy=True))
    

    def __repr__(self):
        return f'< {self.comment} >'

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "blog_id": self.blog_id,
            "blog": self.blog,
        }

class Blogs(db.Model):
    __tablename__ = 'blogs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    body = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates="blogs")
    comments = db.relationship('Comments', backref='blog', lazy=True)

    def __repr__(self):
        return f'<{self.title}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "comments": [comment.serialize() for comment in self.comments]
        }
