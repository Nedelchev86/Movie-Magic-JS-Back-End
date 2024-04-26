const router = require("express").Router();

const homeController = require("./contollers/homeController");
const movieContoller = require("./contollers/movieController");

router.use(homeController);
router.use(movieContoller);
router.all("*", (req, res) => {
    res.render("404");
});

module.exports = router;
