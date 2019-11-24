import time
import pymongo
import datetime as dt
from random import random
from textblob import TextBlob

QUESTION_IDS = {
	'0': None,
	'1': None,
	'2': None,
	'3': None,
	'4': None,
	'5': 'Environmental',
	'6': 'Social',
	'7': 'Financial',
	'8': 'Intellectual',
	'9': 'Physical'
	}

DIMENSIONS = [
	'Environmental',
	'Emotional',
	'Financial',
	'Social',
	'Spiritual',
	'Physical',
	'Intellectual'
	]

def get_responses(client):
	'''Query database for the most recent N responses.
	'''

	N = 15
	cursor = client['test']['questions']
	return cursor.find().sort([('date', -1)]).limit(N)

def get_polarity(answer):
	'''Measures the polarity of the opinion, where -1 corresponds to 
	strongly negative, +1 to strongly positive, and 0 to neutral.
	'''

	blob = TextBlob(answer)
	return blob.sentiment.polarity

def write_values(client, values):
	'''
	'''

	cursor = client['test']['users']
	query = {'name': 'Spencer Dale'}
	values = {'$set': values}
	cursor.update_one(query, values)

def run(user_id):

	# Database objects and parameters
	client = pymongo.MongoClient(
		"mongodb+srv://Nick:Katsiris@cluster0-pyhe1.gcp.mongodb.net/test?retryWrites=true&w=majority"
		)
	name = 'Spencer Dale'

	responses = get_responses(client)
	well_vals = {dim: 2.5 for dim in DIMENSIONS}

	# Update wellness scores
	for response in responses:
		question_id = response['question']
		# print(question_id)
		if int(question_id) >= 5:
			dim = QUESTION_IDS[question_id]
			polarity = get_polarity(response['answer'])
			well_vals[dim] += polarity * 0.75
			# print(dim, well_vals[dim])

	write_values(client, well_vals)
	print('done')

while True:
	run("99")
	time.sleep()

