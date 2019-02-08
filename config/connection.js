var mysql = require('mysql');
var connection;
var connection = mysql.createConnection({
		host: "us-cdbr-iron-east-03.cleardb.net",
		username: "beecedf3856d5b",
		password: "f01a42f4",
		database: "heroku_efc15be4b056e43"
	});
// /////////////////////old
// var connection = mysql.createConnection({
// 		host: "localhost",
// 		port: 3306,
// 		user: "root",
// 		password: "",
// 		database: "burger_db"
// 	});

connection.connect(function(err) {
    if (err) {
    	console.error('error connecting: ' + err.stack);
    	return;
    } 
    console.log("connected as id: " + connection.threadId);
});

module.exports= connection;
