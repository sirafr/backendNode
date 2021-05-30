const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/', upsert)

// function

function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


module.exports = router;