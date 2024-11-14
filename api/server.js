const express = require("express");
const app = express();
const port = 5000;

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
    console.log(`Server running at http://localhost:${port}`);
});