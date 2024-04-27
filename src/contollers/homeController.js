const router = require("express").Router();
const movies = require("../services/movieService");

router.get("/", async (req, res) => {
    const Allmovies = await movies.getAll().lean();

    res.render("home", {Allmovies});
});

module.exports = router;
