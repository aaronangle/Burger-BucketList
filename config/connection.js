const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error(err)
        return
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;