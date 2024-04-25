const router = require("express").Router();
const movies = require("../services/movieService");

router.get("/create", (req, res) => {
    res.render("create");
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
