const router = require("express").Router();
const {User} = require("../models/user.model.js");

router.get("/", (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get("/:id", (req, res) => {
});

router.post("/", (req, res) => {
});

router.patch("/", (req, res) => {
});


router.delete("/", (req, res) => {
});

module.exports = router;