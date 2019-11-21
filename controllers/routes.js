const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");

router.get("/", function (req, res) {
    orm.all(function (err, burger) {
        res.render("index", { burger })

    })
})

router.post("/burger", function (req, res) {
    orm.create(req.body.name, function (err, result) {
        res.json(result)
    })
})

router.put("/burger/:id", function (req, res) {
    const id = req.params.id
    orm.update(id, function (err, result) {
        res.status(200).end();
    })
})

module.exports = router;