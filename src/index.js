const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const configHandlebars = require("./config/hbsConfig");
const configExpress = require("./config/configExpress");

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(router);

mongoose.connect("mongodb://localhost:27017/magic-movies").then(() => console.log("DB connected"));

app.listen(port, () => console.log(`Server is listening ot port ${port}`));
