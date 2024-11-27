require("dotenv").config();
const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const hostname = os.hostname();

app.use(cors());
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
});