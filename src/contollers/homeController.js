const router = require("express").Router();
const movie = require("../services/movieService");

router.get("/", (req, res) => {
    res.render("home", {movie});
});

module.exports = router;
