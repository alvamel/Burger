// Here the ORM which will query the burger databasse

var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push('?');
    }

    return array.toString();
}

function objToSql(ob) {
    // column 1 = value, column 2 = value 2
    var array = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            array.push(key + '=' + ob[key]);
        }
    }

    return array.toString();
}

var orm = {
    // orm to show all values in the burger database
    all: function (tableInput, callback) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    // orm to add values to the burger db
    // vals is an array of values tha we want to save to columns, where we insert values into
    create: function (table, cols, vals, callbsck) {
        var queryString = 'INSERT INTO' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ')';
        queryString += 'VALUES (';
        queryString + printQuestionMarks(vals.length);
        queryString += ')';

        console.log(queryString);

        connection.quey(queryString, vals, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    // orm updates values in the burger db
    // objColsVals is the columns values that needs to be updated
    update: function (table, objColVals, condition, callback) {
        var queryString = 'UPDATE' + table;

        queryString += 'SET'; 
        queryString += objToSql(ojColVals);
        queryString += 'WHERE';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    
}

module.exports = orm;