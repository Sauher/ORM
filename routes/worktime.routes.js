const router = require("express").Router();
const { Worktime, operatorMap } = require("../models/index");


router.get("/", async (req, res) => {
    Worktime.findAll()
        .then(worktimes => {
            res.json(worktimes);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// Get worktimes by field
router.get("/:field/:op/:value", async (req, res) => {
    try{
        const { field, op, value } = req.params;
        
        if (!operatorMap[op]) {
            return res.status(400).json({ error: "Invalid operator" });
        }
        const where = {
            [field]: {
                [operatorMap[op]]: op === 'lk' ? `%${value}%` : value
            }
        }
        const worktimes = await Worktime.findAll({ where });
        res.status(200).json(worktimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const worktime = await Worktime.findByPk(id);
    if (worktime) {
        res.json(worktime);
    } else {
        res.status(404).json({ message: "Worktime not found" });
    }
});

router.post("/", async (req, res) => {
    try {
        const worktime = await Worktime.create(req.body);
        res.status(201).json(worktime);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const worktime = await Worktime.findByPk(id);
    if (!worktime) {
        return res.status(404).json({ message: "Worktime not found" });
    }
    const updatedworktime = await worktime.update(req.body);
res.status(200).json(updatedworktime);
});


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const worktime = await Worktime.findByPk(id);
    if (!worktime) {
        return res.status(404).json({ message: "Worktime not found" });
    }
    await worktime.destroy();
    res.status(200).json({ message: "Worktime deleted successfully" });
});

module.exports = router;