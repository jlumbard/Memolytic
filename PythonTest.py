import pymongo

client = pymongo.MongoClient("mongodb+srv://Nick:<pword>@cluster0-pyhe1.gcp.mongodb.net/test?retryWrites=true&w=majority")
mydb = client["test"]

#this would be changed to the various types of records you're trying to query
mycol = mydb["questions"]

#and this would be changed to field:value to find something. Likely UserID: '1234' will be a common one

myquery = {"answer":"Red"}

mydoc = mycol.find(myquery)

for x in mydoc:
  print(x)
