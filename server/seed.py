#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
import datetime


# Local imports
from app import app
from models import db, Yoga_Class, Yoga_SignUp, User, Community_Event, Community_Event_SignUp

def create_database():
    with app.app_context():
        db.create_all()

#conversion for datetime - tested this in test.py
def convert(date_time):
    format = '%b %d %Y %I:%M%p'
    datetime_str = datetime.datetime.strptime(date_time, format)
 
    return datetime_str

#datetime for yoga classes
date_time1 = 'Sep 22 2023 11:00AM'
date_time2 = 'Sep 23 2023 10:00AM'
date_time3 = 'Sep 24 2023 11:00AM'

#datetime for community events
date_time4 = 'Oct 15 2023 12:00PM'
date_time5 = 'Nov 11 2023 06:00PM'
date_time6 = 'Jan 12 2024 06:00PM'


#Yoga classes
yc1 = Yoga_Class(
    class_name = "Power Flow",
    class_description = "Empower yourself with this musically driven, soul nourishing, upbeat class. Flow with breath and dig deep for 60 fun and challenging minutes. All levels welcome. Class heated to 90+ degrees.",
    start_time = convert(date_time1),
    time_duration = "60 min.",
    teacher_id = randint(1, 5),
)
yc2 = Yoga_Class(
    class_name = "Slow Flow",
    class_description = "60 minute class designed for all levels. This class is structured similar to our power flow class, but taught at a much more intentional pace. We will spend more time in poses, as well as offer more modifications over the course of this class. Room is warmed to 80+ degrees.",
    start_time = convert(date_time2),
    time_duration = "60 min.",
    teacher_id = randint(1, 5),
)
yc3 = Yoga_Class(
    class_name = "Yin",
    class_description = "Cozy up for 60 minutes of deep stretching. Each Yin class will go deeper than our muscles, to target the body's connective tissue. Room gently warmed.",
    start_time = convert(date_time3),
    time_duration = "60 min.",
    teacher_id = randint(1, 5),
)



#Yoga signups -- use faker data
def create_yoga_signups():
    yoga_signups = []
    # yoga_class = [1, 2, 3]
    for _ in range(50):
        ys = Yoga_SignUp(
            user_id = randint(1, 50),
            yoga_class_id = randint(1 ,3)
        )
        yoga_signups.append(ys)
    return yoga_signups

#Users -- use faker data
# teachers to have a picture - does that mean that users also need a picture?
def create_users():
    users = []
    for _ in range(50):
        u = User(
            first_name = fake.name(),
            last_name = fake.name(),
            email = fake.email(),
            address = fake.address(),
            role = rc(["admin", "user"]),
            membership_status = True
        )
        users.append(u)
    return users

#Community event signups -- use faker data
def create_community_event_signup():
    community_signups = []
    user_stat = ["Going", "Can't Make It", "Interested"]
    for _ in range(50):
        c = Community_Event_SignUp(
            user_id = randint(1, 50),
            community_event_id = randint(1, 3),
            user_status = rc(user_stat)
        )
        community_signups.append(c)
    return community_signups

#Community events
# community events to also have a picture in the future?
ce1 = Community_Event(
    event_name = "LUXURY CROATIAN YOGA RETREAT 2023",
    event_description = "Show up for empowered and nourishing yoga classes lead by world class teachers and leaders, deep and authentic cultural experiences, adventure and exploration, and a 5-star luxury hotel experience.",
    start_time = convert(date_time4),
    time_duration = "October 15th-20th 2023",
    location = "Grand Park Hotel Rovinj, Croatia",
)
ce2 = Community_Event(
    event_name = "Sound Bath with Bladen",
    event_description = "Weaving together the sounds of tuning forks, gongs, a shruti box, crystal singing bowls, chimes, and voice, you will be intuitively guided to rest and replenish. All ages welcome. Yoga mats, cushions, blankets journaling/art supplies are provided and feel free to bring your own.",
    start_time = convert(date_time5),
    time_duration = "90 min.",
    location = "WildSol Collective Studio"
)
ce3 = Community_Event(
    event_name = "WildSol Collective Yoga Teacher Training",
    event_description = "Immerse yourself in a life changing experience - whether you're looking to deepen your practice or begin the journey of becoming a yoga teacher, this training is designed to transform you from the inside out.",
    start_time = convert(date_time6),
    time_duration = "January 12th - April 26th 2024",
    location = "WildSol Collective Studio"
)


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print("creating db")
        create_database()

        print("Clearing database...")
        Yoga_Class.query.delete()
        Yoga_SignUp.query.delete()
        User.query.delete()
        Community_Event.query.delete()
        Community_Event_SignUp.query.delete()

        print("Creating Yoga Classes...")
        yoga_class = [yc1, yc2, yc3]
        db.session.add_all(yoga_class)
        db.session.commit()

        print("Creating Yoga Signups...")
        yoga_signups = create_yoga_signups()
        db.session.add_all(yoga_signups)
        db.session.commit()

        print("Creating Users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Creating Community Event Signups...")
        community_signups = create_community_event_signup()
        db.session.add_all(community_signups)
        db.session.commit()

        print("Creating Community Events...")
        community_event = [ce1, ce2, ce3]
        db.session.add_all(community_event)
        db.session.commit()

        print("Seeding Complete!")