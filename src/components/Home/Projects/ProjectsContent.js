import image1 from './images/beats-by-dwight.PNG'
import image2 from './images/quiz-crafter.PNG'
import image3 from './images/story-time.PNG'

export const projectContent = [
  {
    id: 1,
    name: 'Story Time',
    image: image3,
    link: 'https://jintekiwarrior.github.io/Story_Time_Frontend',
    summary: `An app that allows users to write their own stories
    and chapters to share with others.`,
    frontTools: 'Front end - JS, HTML5, CSS3, ReactJs, and Axios.',
    backTools: 'Back end - Python, DJango, and PostgreSQL.'
  },
  {
    id: 2,
    name: 'Quiz Crafter',
    image: image2,
    link: 'https://jintekiwarrior.github.io/createQuiz-client',
    summary: `An application where a teacher can create their own quiz,
    and allow others to take it.`,
    frontTools: 'Front end - JS, JQuery, HTML5, CSS3, SASS, and AJAX for the API requests',
    backTools: 'Back end - NodeJS, Express, MongoDB, Mongoose'
  },
  {
    id: 3,
    name: 'Beets by Dwight',
    image: image1,
    link: 'https://boo-leans.github.io/eCommerce-client',
    summary: `An ecommerce site where users can shop for fresh produce. Made as
    an integrated member of a 4-person team.`,
    frontTools: 'Front end - JS, HTML5, CSS3, ReactJS, Stripe Checkout, Axios',
    backTools: 'Back end - NodeJS, Express, MongoDB, and Mongoose'
  }
]
