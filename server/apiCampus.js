'use strict'
const api = require('express').Router()
const campus = require('../db').models.campus

api.get('/campuses', (req, res, next) => {
  campus.findAll()
  .then(camp => res.json(camp))
  .catch(next)
})

api.get('/campuses/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId)
	.then(stud => res.json(stud))
	.catch(next)
})

api.post('/campuses', (req, res, next) => {
	campus.create(req.body)
	.then(stud => res.json(stud))
	.catch(next)
})

module.exports = api
