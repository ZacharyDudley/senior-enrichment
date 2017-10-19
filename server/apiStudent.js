const api = require('express').Router()
const student = require('../db').models.student
const campus = require('../db').models.campus

api.get('/students', (req, res, next) => {
	console.log(campus)
	student.findAll({ include: [campus] })
	.then(students => res.json(students))
	.catch(next)
})

api.get('/students/:studentId', (req, res, next) => {
	student.findById(req.params.studentId)
	.then(stud => res.json(stud))
	.catch(next)
})

api.post('/students', (req, res, next) => {
	student.create(req.body)
	.then(stud => res.json(stud))
	.catch(next)
})

module.exports = api
