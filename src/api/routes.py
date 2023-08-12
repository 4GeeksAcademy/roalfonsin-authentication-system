"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
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

@api.route('/login/<user_email>/<user_password>', methods=['GET'])
def handle_login(user_email, user_password):

    user_query = User.query.filter_by(email = user_email)
    if len(list(user_query)) == 0:
        raise APIException('User does not exist', 405)

    database_password = user_query[0].password
    bytes_password  =  bytes(user_password, 'utf-8')
    if bcrypt.checkpw(bytes_password, database_password):
        response_body = {
            "message": "The info is correct"
        }
    else:
        response_body = {
            "message": "The info is NOT correct"
        }

    return jsonify(response_body), 200