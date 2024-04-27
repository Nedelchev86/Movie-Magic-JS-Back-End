const router = require("express").Router();

const homeController = require("./contollers/homeController");
const movieContoller = require("./contollers/movieController");
const castConstroller = require("./contollers/castController");

router.use(homeController);
router.use(movieContoller);
router.use(castConstroller);
router.all("*", (req, res) => {
    res.render("404");
});

module.exports = router;
