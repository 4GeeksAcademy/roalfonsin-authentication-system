"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
import bcrypt
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/signup/<new_email>/<new_password>', methods=['POST'])
def handle_signup(new_email, new_password):

    user_query = User.query.filter_by(email = new_email)
    if len(list(user_query)) != 0:
        raise APIException('User already exist', 400)

    bytes_password  =  bytes(new_password, 'utf-8')
    hashed_password = bcrypt.hashpw(bytes_password, bcrypt.gensalt())
    new_user = User(email = new_email, password = hashed_password)
    db.session.add(new_user)
    db.session.commit()
    response_body = {
        "message": "The user was created"
    }

    return jsonify(response_body), 200