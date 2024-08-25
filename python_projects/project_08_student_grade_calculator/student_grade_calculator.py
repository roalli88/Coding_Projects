testScores = [90, 89, 78, 92, 95]
# Average score.
avgScore = sum(testScores) // len(testScores)


# Using the comparison operators to grade the scores.
if avgScore >= 75:
    grade = 'A'
elif 65 <= avgScore < 75:
    grade = 'B'
elif 55 <= avgScore < 65:
    grade = 'C'
elif 40 <= avgScore < 55:
    grade = 'D'
else:
    grade = 'F'
if avgScore % 10 >= 5:
    grade += '+'


#Membership check
checkScore = 88
if checkScore in testScores:
    print(f"The score {checkScore} is in the list of scores")
else:
    print(f"The score {checkScore} is not in the list of scores")

# Identity check
cloneScores = testScores
if cloneScores is testScores:
    print("cloneScores and testScores reference the same object")
else:
    print("clonesScores and testScores don't reference the same object")

# Bitwise operation
bitOperation = testScores[1] | testScores[2]
print(f"Bitwise OR of the second and third scores is {bitOperation}")


print(f"Student's average score is {avgScore} and the grade is {grade}")

