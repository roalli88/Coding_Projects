firstName = str(input("Please enter your first name: ")).capitalize()
secondName = str(input("Please enter your second name: ")).capitalize()
age =  int(input("Please enter your age: "))
city = str(input("Please enter your city: ")).capitalize()
occupation = input("Please enter your occupation: ")

# Format the names appropriately.
fullName = firstName + ' ' + secondName
profileDesc = f"{fullName} is {age} years old, lives in {city} and works as a {occupation}"

newDesc = ''

# Use string methods to transform the user profile
if occupation.startswith(('a','e','i','o','u')):
    newDesc  = profileDesc.replace('a ','an ')
else:
    newDesc = profileDesc

print()
summary = "\"Profile Information: \"\n" + newDesc
print(summary)

