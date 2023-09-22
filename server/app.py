#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template, Flask, session, make_response
from flask_restful import Resource
import datetime
import random

# Local imports
from config import app, db, api
# Add your model imports
from models import Yoga_Class, Yoga_SignUp, User, Community_Event_SignUp, Community_Event


#To Dos:
# would like to go back and be more thoughtful about the error messages

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'


#logging in

#login/logout tested and all routes are working 
class Login(Resource):
    def post(self):
        login = request.get_json()
        email = login['email']
        password = login['password']
        user = User.query.filter(User.email == email).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
        return {'error': 'Unauthorized'}, 401

class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message':'401: Not Authorized'}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message':'204: No Content'}



#   ***USERS***
#add query for post request for make sure username doesn't already exist - this needs to go on my models under my validation
# need to figure out the role & membership stuff in the future, this is just a placeholder to get the post to work

#users tested and all routes are working
class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return users, 200

    def post(self):
        fields = request.get_json()
        new_user = User(
            name=fields['name'],
            email=fields['email'],
            address=fields['address'],
            role=fields.get('role','admin'),
            membership_status=fields.get('membership_status', True),
            password_hash=fields['password']
            )
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        return new_user.to_dict(), 201

#usersbyid tested and all routes are working
class UsersById(Resource):
    def get(self, id):
        user_by_id = User.query.filter_by(id=id).first()
        if user_by_id == None:
            return {'errors': ['user not found']}, 404
        else:
            return user_by_id.to_dict(), 200

    def patch(self, id):
        user_by_id = User.query.filter_by(id=id).first()
        if user_by_id == None:
            return {'errors': ['user not found']}, 404
        else:
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(user_by_id, attr, fields[attr])
                    db.session.add(user_by_id)
                    db.session.commit()
                return user_by_id.to_dict(), 200  
            except ValueError:
                return {"errors": ["validation errors"]}, 422

    def delete(self, id):
        user_by_id = User.query.filter_by(id=id).first()
        if user_by_id == None:
            return {'errors': ['user not found']}, 404
        else:
            db.session.delete(user_by_id)
            db.session.commit()
            return {}, 200


#yoga classes routes tested and working
class Yoga_Classes(Resource):
    def get(self):
    #     day: "Monday",
    # start_time: "6:30AM",
    # duration: "60 min.",
    # className: "Power Flow 60",
    # teacher: "Margot Antonelli",
    # image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684268950680-55QNSFOFE74OL09AHMIA/Margot%2BWeb.jpg?format=300w"

        teachers = {
            5: {
                "name": "Emma Kirby",
                "image": "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684269196833-OU8AT91S2UJ6X3DIPDSK/Emman+Web.jpg?format=750w" 
            },
            1: {
                "name": "Margot Antonelli",
                "image": "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684268950680-55QNSFOFE74OL09AHMIA/Margot%2BWeb.jpg?format=300w"
            },
            2: {
                "name": "Brooke Wyman",
                "image": "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072149608-SOSH4AXLHJBYHROTSJHG/brooke+wyman+2.jpg?format=750w"
            },
            3: {
                "name": "Kaileigh Gallivan",
                "image": "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684269179299-9MXAY9XIO00F0JDW6PRJ/Untitled+2.jpg?format=300w"
            },
            4: {
                "name": "Sybil Meyer",
                "image": "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072441664-3HIEKTD7WS6IBV9Y8PKA/sybil+meyer+1.jpg?format=300w"
            }
        }

        ret_val = [[] for i in range(7)]
        for y in Yoga_Class.query.all():
            ret_val[y.start_time.weekday()].append(
                {
                    "day": y.start_time.strftime('%A'),
                    "start_time": y.start_time.strftime('%I:%M%p'),
                    "date_time": y.start_time.strftime('%H'),
                    "duration": y.time_duration,
                    "className": y.class_name,
                    "teacher": teachers[y.teacher_id]["name"],
                    "image": teachers[y.teacher_id]["image"]
                }
            )

        [r.sort(key=lambda x: x["date_time"]) for r in ret_val]

        return ret_val, 200
    
    #I want to post a new class by picking from the 3 class options we have - how can I add these to a drop down on the front end and post it on the backend? Like picking a class and it autofills the boxes of creating a new class.

    def post(self):
        #conversion for datetime - tested this in test.py
        def convert(date_time):
            format = '%b %d %Y %I:%M%p'
            datetime_str = datetime.datetime.strptime(date_time, format)
            return datetime_str
        
        fields = request.get_json()
        new_class = Yoga_Class(
                class_name=fields['class_name'],
                class_description=fields['class_description'],
                start_time =convert(fields['start_time']),
                time_duration =fields['time_duration'],
                teacher_id =fields['teacher_id']
            )
        db.session.add(new_class)
        db.session.commit()
        return new_class.to_dict(), 200
        #this does return null and I think that's because I am not have it return anything?


#yogaclassesbyId routes tested and working
class YogaClassesById(Resource):
    def get(self, id):
        class_by_id = Yoga_Class.query.filter_by(id=id).first()
        if class_by_id == None:
            return {'error':['class not found']}, 400
        else:
            return class_by_id, 200

    def patch(self, id):
        class_by_id = Yoga_Class.query.filter_by(id=id).first()
        if class_by_id == None:
            return {'error': ['class not found']}, 404
        else:
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(class_by_id, attr, fields[attr])
                    db.session.add(class_by_id)
                    db.session.commit()
                return class_by_id.to_dict(), 200
            except ValueError:
                return {'error':['validation error']}, 422

    def delete(self, id):
        class_by_id = Yoga_Class.query.filter_by(id=id).first()
        if class_by_id == None:
            return {'error':['yoga class not found']}, 404
        else:
            db.session.delete(class_by_id)
            db.session.commit()
            return {}, 200

# community events tested and routes working
class Community_Events(Resource):
    def get(self):
        community_events = [c.to_dict() for c in Community_Event.query.all()]
        return community_events, 200

    def post(self):
        #conversion for datetime - tested this in test.py
        def convert(date_time):
            format = '%b %d %Y %I:%M%p'
            datetime_str = datetime.datetime.strptime(date_time, format)
            return datetime_str
        fields = request.get_json()
        new_event = Community_Event(
            event_name=fields['event_name'],
            event_description=fields['event_description'],
            start_time=convert(fields['start_time']),
            time_duration=fields['time_duration'],
            location=fields['location']
        )
        db.session.add(new_event)
        db.session.commit()
        return new_event.to_dict(), 201

# communityeventsbyID tested and working
class CommunityEventsById(Resource):
    def get(self, id):
        event_by_id = Community_Event.query.filter_by(id=id).first()
        if event_by_id == None:
            return {'error':['event not found']}, 404
        else:
            return event_by_id, 200

    def patch(self, id):
        event_by_id = Community_Event.query.filter_by(id=id).first()
        if event_by_id == None:
            return {'error':['event not found']}, 404
        else:
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(event_by_id, attr, fields[attr])
                    db.session.add(event_by_id)
                    db.session.commit()
                return event_by_id.to_dict(), 200
            except ValueError:
                return {'error':['validation error']}, 422

    def delete(self, id):
        event_by_id = Community_Event.query.filter_by(id=id).first()
        if event_by_id == None:
            return {'error':['event not found']}, 404
        else:
            db.session.delete(event_by_id)
            db.session.commit()
            return {}, 200

#yoga signups tested and working
class Yoga_SignUps(Resource):
    def get(self):
        yoga_signups = [y.to_dict() for y in Yoga_SignUp.query.all()]
        return yoga_signups, 200

    def post(self):
        fields = request.get_json()
        # print(fields)
        # user = db.session.get(User, fields['user_id'])
        user = User.query.filter_by(id = fields['user_id']).first()
        yoga_class = Yoga_Class.query.filter_by(id = fields['yoga_class_id']).first()
        if user and yoga_class:
            new_signup = Yoga_SignUp(
                user_id=fields['user_id'],
                yoga_class_id=fields['yoga_class_id']
            )
            db.session.add(new_signup)
            db.session.commit()
            return new_signup.to_dict(), 200
        else:
            return {'error': ['validation error or class/user does not exist']}, 404


#yogasignupsbyid routes tested and working
class YogaSignUpsById(Resource):
    #not adding delete bc I want to be able to track who canceled
    def get(self, id):
        signups_by_id = Yoga_SignUp.query.filter_by(id=id).first()
        if signups_by_id == None:      
            return {'error':['yoga class signup not found']}, 404
        else:
            return signups_by_id.to_dict(), 200

    def patch(self, id):
        signups_by_id = Yoga_SignUp.query.filter_by(id=id).first()
        if signups_by_id == None:
            return {'error':['signup not found']}, 404
        else:
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(signups_by_id, attr, fields[attr])
                    db.session.add(signups_by_id)
                    db.session.commit()
                return signups_by_id.to_dict(), 200
            except ValueError:
                return {'error': ['validation error']}, 404

# communityeventsignups routes tested and working
class CommunityEventSignUps(Resource):
    def get(self):
        event_signups = [e.to_dict() for e in Community_Event_SignUp.query.all()]
        return event_signups, 200

    def post(self):
        fields = request.get_json()
        user = User.query.filter_by(id=fields['user_id']).first()
        event = Community_Event.query.filter_by(id=fields['community_event_id']).first()
        if user and event:
            new_event = Community_Event_SignUp(
                user_id=fields['user_id'],
                community_event_id=fields['community_event_id'],
                user_status=fields['user_status']
            )
            db.session.add(new_event)
            db.session.commit()
            return new_event.to_dict(), 200
        else:
            return {'error': ['user/event does not exist']}, 404


#communityeventsignupsbyID tested and working
class CommunityEventSignUpsById(Resource):
    #not adding delete bc I want to be able to track who canceled
    def get(self, id):
        signups_by_id = Community_Event_SignUp.query.filter_by(id=id).first()
        if signups_by_id == None:
            return {'error':['event signup not found']}, 404
        else:
            return signups_by_id.to_dict(), 200

    def patch(self, id):
        signups_by_id = Community_Event_SignUp.query.filter_by(id=id).first()
        if signups_by_id == None:
            return {'error':['signup not found']}, 404
        else:
            fields = request.get_json()
            try:
                for attr in fields:
                    setattr(signups_by_id, attr, fields[attr])
                    db.session.add(signups_by_id)
                    db.session.commit()
                return signups_by_id.to_dict(), 200
            except ValueError:
                return {'error': ['validation error']}, 404
            




# Views go here! use either route!
@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return render_template("index.html")

api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/checksession')
api.add_resource(Logout, '/logout')
api.add_resource(Users, '/signup')
api.add_resource(UsersById, '/users/<int:id>')
api.add_resource(Yoga_Classes, '/yogaclasses')
api.add_resource(YogaClassesById, '/yogaclasses/<int:id>')
api.add_resource(Community_Events, '/communityevents')
api.add_resource(CommunityEventsById, '/communityevents/<int:id>')
api.add_resource(Yoga_SignUps, '/yogasignups')
api.add_resource(YogaSignUpsById, '/yogasignups/<int:id>')
api.add_resource(CommunityEventSignUps, '/communityeventsignups')
api.add_resource(CommunityEventSignUpsById, '/communityeventsignups/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

