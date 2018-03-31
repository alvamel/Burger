// models to use the orms build in orm.js 
var orm = require('../config/orm.js');

// orm shows all values in the burger db
var burger = {
    all: function (callback) {
        orm.all('burgers', function (result) {
            callbsck(result);
        })
    },

    // orm add values to the burger db
    // cols and vals are arrays
    create: function (cols, vals, callback) {
        orm.create('burgers', cols, vals, function (result) {
            callback(result);
        });
    },

    // orm updates values in the burger db
    // objColVals is the columns and values to update
    update: function (objColVals, condition, callback) {
        orm.update('burgers', objColVals, condition, function (result) {
            callback(result);
        });
    },
}

module.exports = burger;