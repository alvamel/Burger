import { read } from 'fs';

// routes that will be needed 
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// routes when user goes to the main page
router.get('/', function (request, result) {
    result.redirect('/burgers');
})

// route to pull order
router.get('/burgers', function (request, result) {
    burger.all(function (data) {
        var hbsObject = {burger: data};
        console.log(hbsObject);
        result.render('index', hbsObject);
    };
})

// route to add an order to the burger db
router.post('/burgrs/create', function (request, result) {
    burger.create(['burger_name', 'devoured'], [request.body.name, request.body.devoured], function() {
        result.redirect('/burgers');
    })
})

// route to update burger db when order is picked-up
router.put('/burgers/update/:id', function (request, result) {
    var condition = 'id = ' + request.params.id;

    console.log('condiition', condition);

    burger.update({devoured: request.body.devoured}, condition, function() {
        result.redirect('/burgers');
    })
})

module.exports = router;