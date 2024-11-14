require("dotenv").config();
const express = require("express");
const os = require("os");
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
const hostname = os.hostname();

app.use(cors());
app.use(express.json());

const data = require("./public/data/target-data.json")

app.get("/data",(req,res)=>{
    res.send(data);
});

app.get("/vehicleImage/:file_name",(req, res)=>{
    const fileName = req.params.file_name;
    const fileDir = `${__dirname}/public/images/vehicles/${fileName}`;

    res.sendFile(fileDir);
});

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
});