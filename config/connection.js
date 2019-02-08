var mysql = require('mysql');
var connection;
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection('mysql://bc07b91e407eff:54bbf382@us-cdbr-iron-east-03.cleardb.net/heroku_77a7806bfe895b6?reconnect=true');
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    });
}
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
