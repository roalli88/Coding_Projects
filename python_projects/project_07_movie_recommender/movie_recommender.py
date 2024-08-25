action_movie = input("Do you like action movies? (Yes/No)").lower() == 'yes'
comedy_movie = input("Do you like comedy movies? (Yes/No)").lower() == 'yes'

if action_movie and not comedy_movie:
    movie_genre = "Action"
elif comedy_movie and not action_movie:
    movie_genre = "Comedy"

else:
    movie_genre = "Unknown"


if movie_genre == "Action":
    print("Recommended action movies: 'Rocky', 'Fast and Furious' ")
elif movie_genre == "Comedy":
    print("Recommended comedy movies: 'Ted', 'Taxi' ")
else:
    print("Sorry there are no available movie recommendations based on your preferences.")