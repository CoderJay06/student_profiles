# Student Profiles

## Components

- StudentProfiles
  url: https://api.hatchways.io/assessment/students

- Profile
  . image (fetch: .pic)
  . name (fetch: .firstName, .lastName)
  . email
  . company
  . skill
  . average (fetch: .grades calc: sum(grades) / len(grades))
  . testScores (fetch: .grades)

- ProfileSearchBox
  . name

- TagSearchBox
  . tag

## Steps

1. Fetch students url and set studentProfiles state
2. map through studentProfiles get the following data:
   .pic, .firstName + .lastName, .email, .company, .skill, .grades (store each test scores and get average)
   pass data as props to the Profile component to be presented
3. display student profiles in render as divs w/ img, h1, ul
