const express = require("express");
const router = require("./routes");

const configHandlebars = require("./config/hbsConfig");
const configExpress = require("./config/configExpress");

const app = express();
const port = 5000;



configHandlebars(app);
configExpress(app);

app.use(router);

app.listen(port, () => console.log(`Server is listening ot port ${port}`));
