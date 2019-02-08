# Allison-burgers
mysql://t1k92uc1byos43t0:ty7kxessscnsp0rs@gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s8muobanq3rwvhr4

if (process.env.JawsDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    });
}
}