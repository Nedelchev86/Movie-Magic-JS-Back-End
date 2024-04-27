const router = require("express").Router();
const movies = require("../services/movieService");
const movieService = require("../services/movieService");

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    const newMovie = req.body;
    try {
        await movieService.create(newMovie);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.redirect("/404")
    }
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/details/:_id", (req, res) => {
    const movie = movies.find((m) => m._id == req.params._id);
    console.log(movie);

    res.render("details", {movie});
});
module.exports = router;
