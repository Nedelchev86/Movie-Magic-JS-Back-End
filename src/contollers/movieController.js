const router = require("express").Router();

router.get("/create", (req, res) => {
    res.render("create");
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("details/:id", (req, res) => {
    res.render("details", req.params.id);
});
module.exports = router;
