const sourceData = require("./source-data.json");
var fs = require('fs');

const {names, descriptions, places, properties } = sourceData.source_data;
const count = 50;

const getRandomNumber = (number) => Math.floor(Math.random()*number);

const getRandomDate = () => {
    const day = getRandomNumber(27) + 1;
    const year = getRandomNumber(5) + 2020;
    const month = getRandomNumber(11) + 1;

    return `${month}/${day}/${year}`;
}

const getRandomProperties = () => {
    const result = [];
    for(let i=0; i<9; i++){
        const property = properties[getRandomNumber(properties.length)];
        result.push(property);
    }
    return result;
}

const targetData= [];

for(let i=0; i<count; i++){
    const name = names[getRandomNumber(names.length)];
    const description = descriptions[getRandomNumber(descriptions.length)];
    const place = places[getRandomNumber(places.length)];
    const properties = getRandomProperties();
    const productionYear = getRandomNumber(30) + 1994;
    const advertDate = getRandomDate();
    const price = getRandomNumber(1000000) + 500000;
    const distance = getRandomNumber(40000) + 80000;
    const type = getRandomNumber(5)

    const dataItem = {
        id: i, name, description, properties, city: place.city, type,
        district: place.district, productionYear, advertDate, price, distance
    };

    targetData.push(dataItem);
}

const resultData = {vehicleData: targetData};
fs.writeFile("target-data.json", JSON.stringify(resultData), function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log("Generated target datas!");
    }
});

