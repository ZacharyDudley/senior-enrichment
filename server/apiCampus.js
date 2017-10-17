'use strict'
const api = require('express').Router()
const campus = require('../db/models/campus')


api.get('/', (req, res, next) => {
  campus.findAll()
	.then(camp => res.json(camp))
  .catch(next)
})

api.post('/', (req, res, next) => {
	campus.create(req.body)
	.then(camp => res.json(camp))
	.catch(next)
})

api.get('/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId)
	.then(camp => res.json(camp))
	.catch(next)
})

api.put('/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId)
	.then(camp => camp.update(req.body))
	.then(newCamp => res.json(newCamp))
	.catch(next)
})

api.delete('/:campusId', (req, res, next) => {
	campus.findById(req.params.campusId)
	.then(camp => camp.destroy())
	.then(() => res.sendStatus(204))
	.catch(next)
})

module.exports = api
