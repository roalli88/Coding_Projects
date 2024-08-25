import random

random_number = random.randrange(1,100)
#Using single quote string
print(f'The random number is {random_number}')
#Using double quote string
print(f"The data type of {random_number} is {type(random_number)}")

#snake_case_variable_name
number_to_float = float(random_number)
#PascalCaseVariableName
NumberToComplex = complex(random_number)
#camelCaseVariableName
numberToComplex = complex(random_number)

print(f"The random number {random_number} converted to float is {number_to_float}")
print(f"The random number {random_number} converted to complex number is {NumberToComplex}")


