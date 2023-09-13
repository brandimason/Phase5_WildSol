import datetime

def convert(date_time):
    format = '%b %d %Y %I:%M%p'
    datetime_str = datetime.datetime.strptime(date_time, format)
 
    return datetime_str
   
date_time = 'Jan 12 2024 06:00PM'
print(convert(date_time))
print(type(convert(date_time)))


#this is what my post needs to look like for yoga classes:
#peep the start time, i have this convert function in my app.py. This function is also in my seed file because that's what I need in order to get data into my database.
# {
#   "class_name": "Power Flow",
#   "class_description": "Empower yourself with this musically driven, soul nourishing, upbeat class. Flow with breath and dig deep for 60 fun and challenging minutes. All levels welcome. Class heated to 90+ degrees.",
#   "start_time":"Jan 12 2024 06:00PM",
#   "time_duration": "60 min.",
#   "teacher_id":"2"
# }