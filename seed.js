const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const student = [
  { name: 'Zachary Dudley Friedman',
    email: 'ZDF@campus.edu'},
  { name: 'Eric Spore',
    email: 'ES@campus.edu'},
  { name: 'Student McStudentFace',
    email: 'student@campus.edu'},
  { name: 'WHIDTM',
    email: 'WHIDTM@campus.edu'},
];

const campus = [{
  name: 'EARTH',
  image: '/public/favicon.ico'
}, {
  name: 'MOON',
  image: '/public/favicon.ico'
}, {
  name: 'MARS',
  image: '/public/favicon.ico'
}, {
  name: 'TITAN',
  image: '/public/favicon.ico'
}, {
  name: 'SUN',
  image: '/public/favicon.ico'
}];


const seed = () =>
  Promise.all(campus.map(camp =>
    Campus.create(camp))
  )
  .then(() =>
  Promise.all(student.map(stud =>
    Student.create(stud))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
