const router = require("express").Router();
const {User} = require("../models/index");

router.get("/", async (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

router.post("/registration", async (req, res) => {
    try{
    const { name, email, password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    const user =  await User.create({ name, email, password});
    res.status(201).json(user);
    } catch(e){
        res.status(500).json({ message: 'Registration failed', error: e.message });
    }
    
});

router.patch("/:id", async (req, res) => {
const id = req.params.id;
const user = await User.findByPk(id);
if (!user){
    return  res.status(404).json({ message: "User not found" });
}
const updateduser = await user.update(req.body);
res.status(200).json(updateduser);
});


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
});

module.exports = router;