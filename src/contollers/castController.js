const router = require("express").Router();

router.get("/cast", (req, res) => {
    res.render("cast-create");
});

router.post("/cast", (req, res) => {
    console.log(req.body);
    res.render("cast-create");
});

module.exports = router;
