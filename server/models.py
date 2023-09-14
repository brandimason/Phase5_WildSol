from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates, relationship
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

# flask db init
# flask db revision --autogenerate -m "create tables"
# flask db upgrade head


##questions:
#where do I need to set up cascading deletes? what is the purpose again?


# Models go here!
class Yoga_Class(db.Model, SerializerMixin):
    __tablename__ = 'yoga_classes'

    id = db.Column(db.Integer, primary_key=True)
    class_name = db.Column(db.String)
    class_description = db.Column(db.String)
    start_time = db.Column(db.DateTime)
    time_duration = db.Column(db.String)
    teacher_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    #relationships
    yoga_signups = relationship("Yoga_SignUp", back_populates="yoga_classes", cascade='delete,all')

    #serialize rules
    serialize_rules = ('-yoga_signups',)

    def __repr__(self):
        return f'<Yoga_Class {self.id}>'

    #validations for teacher creating a new class
    @validates('class_name')
    def validate_class_name(self, key, class_name):
        if class_name is None:
            raise ValueError("Must enter class name")
        if len(class_name) < 2:
            raise ValueError("Class name must be greater than 2 characters long")
        return class_name
    
    @validates('class_type')
    def validate_class_type(self, key, class_type):
        if class_type is None:
            raise ValueError("Must enter class type")
        return class_type
    
    @validates('time')
    def validate_time(self, key, time):
        if time is None:
            raise ValueError("Must enter time of class")
        return time
    
    @validates('duration')
    def validate_duration(self, key, duration):
        if duration is None:
            raise ValueError("Must enter duration of class")
        return duration
        
    @validates('teacher')
    def validate_teacher(self, key, teacher):
        if teacher is None:
            raise ValueError("Must select teacher")
        return teacher
    

class Yoga_SignUp(db.Model, SerializerMixin):
    __tablename__ = 'yoga_signups'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    yoga_class_id = db.Column(db.Integer, db.ForeignKey('yoga_classes.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    #relationships
    users = relationship("User", back_populates="yoga_signups")
    yoga_classes = relationship("Yoga_Class", back_populates="yoga_signups")

    #serialize rules
    serialize_rules = ('-users', '-yoga_classes',)

    def __repr__(self):
        return f'<Yoga_SignUp {self.id}>'
    
    # no validations needed

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    address = db.Column(db.String)
    role = db.Column(db.String)
    membership_status = db.Column(db.Boolean(True))
    _password_hash = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    #relationships
    yoga_signups = relationship('Yoga_SignUp', back_populates='users')
    community_event_signups = relationship("Community_Event_SignUp", back_populates="users")

    #serialize rules
    serialize_rules = ('-yoga_signups', '-community_event_signups',)

    #password hashing
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        #utf-8 encoding and decoding is required for python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')\
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    #repr
    def __repr__(self):
        return f'<User {self.id}>'
    
    #validations for user creating a new account
    @validates('first_name')
    def validate_first_name(self, key, first_name):
        if first_name is None:
            raise ValueError("Must enter a name")
        if len(first_name) < 0:
            raise ValueError("Name must be at least 1 character")
        return first_name
        
    @validates('last_name')
    def validate_last_name(self, key, last_name):
        if last_name is None:
            raise ValueError("Must enter a name")
        if len(last_name) < 0:
            raise ValueError("Last name must be at least 1 character")
        return last_name
    
    @validates('email')
    def validate_email(self, key, email):
        #add query for unique email validation
        if '@' not in email:
            raise ValueError("Enter valid email")
        return email


class Community_Event_SignUp(db.Model, SerializerMixin):
    __tablename__ = 'community_event_signups'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    community_event_id = db.Column(db.Integer, db.ForeignKey('community_events.id'))
    user_status = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    #relationships
    users = relationship("User", back_populates="community_event_signups")
    community_events = relationship("Community_Event", back_populates="community_event_signups")

    #serialize rules
    serialize_rules = ('-users', '-community_events',)

    def __repr__(self):
        return f'<Community_Event_SignUp {self.id}>'
    
    #no validations needed

class Community_Event(db.Model, SerializerMixin):
    __tablename__ = 'community_events'

    id = db.Column(db.Integer, primary_key=True)
    event_name = db.Column(db.String)
    event_description = db.Column(db.String)
    start_time = db.Column(db.DateTime)
    time_duration = db.Column(db.String)
    location = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    #relationships
    community_event_signups = relationship("Community_Event_SignUp", back_populates="community_events", cascade='delete,all')

    #serialize rules
    serialize_rules = ('-community_event_signups',)

    def __repr__(self):
        return f'<Community_Event {self.id}>'
    
    #validations for new events being created
    @validates('event_name')
    def validate_event_name(self, key, event_name):
        if event_name is None:
            raise ValueError("Must enter event name")
        if len(event_name) < 0:
            raise ValueError("Event name must be greater than 0 characters long")
        return event_name
    
    @validates('event_description')
    def validate_event_description(self, key, event_description):
        if event_description is None:
            raise ValueError("Must enter desription for event")
        return event_description
    
    @validates('time')
    def validate_time(self, key, time):
        if time is None:
            raise ValueError("Must enter time of event")
        return time
    
    @validates('duration')
    def validate_duration(self, key, duration):
        if duration is None:
            raise ValueError("Must enter duration of event")
        return duration
    
    @validates('location')
    def validate_location(self, key, location):
        if location is None:
            raise ValueError("Must enter location of event")
        return location