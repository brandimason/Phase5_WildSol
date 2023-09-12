import datetime

def convert(date_time):
    format = '%b %d %Y %I:%M%p'
    datetime_str = datetime.datetime.strptime(date_time, format)
 
    return datetime_str
   
date_time = 'Jan 12 2024 06:00PM'
print(convert(date_time))
print(type(convert(date_time)))