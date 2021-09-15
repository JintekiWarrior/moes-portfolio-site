import image1 from './images/beats-by-dwight.PNG'
import image2 from './images/quiz-crafter.PNG'
import image3 from './images/story-time.PNG'

export const projectContent = [
  {
    id: 1,
    name: 'Story Time',
    image: image3,
    link: 'https://jintekiwarrior.github.io/Story_Time_Frontend',
    summary: `
      This is the best project I've worked on so far. It is an app which
      allows users to create there own stories. I learned a lot about
      using django and python in the back end as it was the first time
      working with these tools. I also learned a lot about react router
      in the front end and got more effiecient using css.
      `
  },
  {
    id: 2,
    name: 'Quiz Crafter',
    image: image2,
    link: 'https://jintekiwarrior.github.io/createQuiz-client',
    summary: `
    This was my first real application where I had to create both an api and
    client from scratch. I learned a ton about how ajax works and express as
    well as how to create a general web application. The application itself
    is a simple quiz app which allows users to create and take there own quizzes.
    `
  },
  {
    id: 3,
    name: 'Beets by Dwight',
    image: image1,
    link: 'https://boo-leans.github.io/eCommerce-client',
    summary: `
    This was a fun project as it was done as a team. As a group of four we
    had to create an ecommerce platform. It definitely was difficult at first
    getting everyone to work as a team. However through out the project we
    were able to overcome our differences, get on the same wave length to
    accomplish the project. It was the first react project I had done and
    because it was a team learned a ton about version control systems.
    `
  }
]
