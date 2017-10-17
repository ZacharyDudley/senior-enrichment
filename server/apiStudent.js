'use strict'
const api = require('express').Router()
const student = require('../db/models/student')


api.get('/', (req, res, next) => {
	student.findAll()
	.then(students => res.json(students))
	.catch(next)
})

api.get('/:studentId', (req, res, next) => {
	student.findById(req.params.studentId)
	.then(stud => res.json(stud))
	.catch(next)
})

api.post('/', (req, res, next) => {
	student.create(req.body)
	.then(stud => {res.status(201).json(stud)})
	.catch(next)
})


module.exports = api
