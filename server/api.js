'use strict'
const api = require('express').Router()
const db = require('../db')
const student = require('../db/models/student')
const campus = require('../db/models/campus')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
	// api.get('/students', require('./apiStudent'));
	// api.get('/campuses', require('./apiCampus'));


//CAMPUSES
api.get('/campuses', (req, res, next) => {
  campus.findAll({ include: [student] })
  .then(camp => res.json(camp))
  .catch(next)
})

api.post('/campuses', (req, res, next) => {
	campus.create(req.body)
	.then(camp => res.json(camp))
	.catch(next)
})

api.get('/campuses/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId, { include: [student] })
	.then(camp => res.json(camp))
	.catch(next)
})

api.put('/campuses/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId, { include: [student] })
		.then(school => school.update({
			name: req.body.name,
			image: req.body.image}))
		.then(camp => res.json(camp))
		.catch(next)
})


//STUDENTS
api.get('/students', (req, res, next) => {
	student.findAll({ include: [campus] })
	.then(students => res.json(students))
	.catch(next)
})

api.post('/students', (req, res, next) => {
	student.create(req.body)
	.then(stud => res.json(stud))
	.catch(next)
})

api.get('/students/:studentId', (req, res, next) => {
	student.findById(req.params.studentId, { include: [campus] })
	.then(stud => res.json(stud))
	.catch(next)
})

api.put('/students/:studentId', (req, res, next) => {
	student.update({
		where: {
			id: req.params.studentId
		}
	})
	.then(stud => res.json(stud))
	.catch(next)
})

api.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = api
