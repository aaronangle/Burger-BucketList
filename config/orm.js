const connection = require("../config/connection.js")

const orm = {
    all: function (cb) {
        const query = "SELECT * FROM burger";
        connection.query(query, cb)
    },
    create: function (name, cb) {
        const query = `INSERT INTO burger(name, eaten) VALUE('${name}', false)`;
        connection.query(query, cb)
    },
    update: function (id, cb) {
        const query = `UPDATE burger SET eaten = true WHERE id = ${id}`;
        connection.query(query, cb)
    }
}

module.exports = orm;