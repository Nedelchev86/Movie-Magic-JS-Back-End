const router = require("express").Router();
const movies = require("../services/movieService");

router.get("/", (req, res) => {
    res.render("home", {movies});
});

module.exports = router;
