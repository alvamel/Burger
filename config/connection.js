// Here we make the connection to the database and export and used by the ORM

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: '',
        password: '',
        database: 'burger_db'
    });
}

connection.connect(function(eror) {
    if (error) {
        console.log('error connection: ' + error.stack);
        return;
    }
    console.log('connected as id ' + connection.threadID);
});

modul.exports = connection;