userString =  input("Please enter a string:  ")
print()
print("String manipulation menu")
# Using multiline strings so we can output the choices in one function call
print("""
      1) Convert the string to uppercase.
      2) Convert the string to lowercase.
      3) Slice the string from a start index to an end index.
      4) Calculate the length of the string.
      5) Loop through each character in the string and display it on a new line.""")
print()

userChoice = input("Please enter your choice (1 - 5): ")

selection = int(userChoice) # Convert the input to an integer.

# Process user input
if selection == 1:
    print(userString.upper())
elif selection == 2:
    print(userString.lower())
elif selection == 3:
    start = int(input("Please enter the start index:  "))
    end   = int(input("Please enter the end index:  "))
    print(f'string slice is {userString[start:end+1]}')
elif selection == 4:
    print(f'string length is {len(userString)}')
elif selection == 5:
    for ch in userString:
        print(ch)
else:
    print("Invalid input")




