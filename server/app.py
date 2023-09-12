#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template, Flask, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Yoga_Class, Yoga_SignUp, User, Community_Event_SignUp, Community_Event




@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


#logging in
class Login(Resource):
    def post(self):
        login = request.get_json()
        email = login['email']
        password = login['password']
        user = User.query.filter(User.email == email).first()
        if user:
            if user.authenticate(password):
                session['user.id'] = user.id
                return user.to_dict(), 200
        return {'error': 'Unauthorized'}, 401

class CheckSession(Resource):
    pass

class Logout(Resource):
    pass



#add query for post request for make sure username doesn't already exist
# class Users(Resource):
#     def get(self):
#         pass

#     def post(self):
#         pass

# class UsersById(Resource):
#     def get(self):
#         pass

#     def patch(self):
#         pass

#     def delete(self):
#         pass

# class Yoga_Classes(Resource):
#     def get(self):
#         pass

#     def post(self):
#         pass

# class YogaClassesById(Resource):
#     def get(self):
#         pass

#     def patch(self):
#         pass

#     def delete(self):
#         pass

# class Community_Events(Resource):
#     def get(self):
#         pass

#     def post(self):
#         pass

# class CommunityEventsById(Resource):
#     def get(self):
#         pass

#     def patch(self):
#         pass

#     def delete(self):
#         pass

# class Yoga_SignUps(Resource):
#     def get(self):
#         pass

#     def post(self):
#         pass

# class YogaSignUpsById(Resource):
#     def get(self):
#         pass

#     def patch(self):
#         pass

# class CommunityEventSignUps(Resource):
#     def get(self):
#         pass

#     def post(self):
#         pass

# class CommunityEventSignUpsById(Resource):
#     def get(self):
#         pass

#     def patch(self):
#         pass




# Views go here! use either route!
@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5555, debug=True)

