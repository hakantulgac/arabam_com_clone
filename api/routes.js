const router = require("express").Router();
const data = require("./public/data/target-data.json");
const places = require("./public/data/places.json");

router.post("/data", (req, res) => {
    const filterItems = req.body;
    const result = getFilteredData(filterItems, data)

    res.send(result);
});

router.get("/city", (req, res) => {
    res.send(places.city);
});

router.get("/district/:city_id", (req, res) => {
    const cityId = req.params.city_id;
    const result = places.district.filter(i => i.id == cityId);
    res.send(result);
});

router.get("/vehicleImage/:file_name", (req, res) => {
    const fileName = req.params.file_name;
    const fileDir = `${__dirname}/public/images/vehicles/${fileName}`;
    res.sendFile(fileDir);
});

const calculateDateRange = (date) => Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));

const getFilteredData = (filterItems, data) => {
    return data.vehicleData
        .filter( item =>
                (!filterItems.priceRange || (filterItems.priceRange[0] <= item.price && filterItems.priceRange[1] >= item.price))
            &&
                (!filterItems.city || (item.city.toLowerCase() === filterItems.city.toLowerCase()))
            &&
                (!filterItems.district || (item.district.toLowerCase() === filterItems.district.toLowerCase())) 
            &&
                (!filterItems.yearRange || (filterItems.yearRange[0] <= item.productionYear && filterItems.yearRange[1] >= item.productionYear))
            &&
                (!filterItems.dateRange || (filterItems.dateRange >= calculateDateRange(item.advertDate)))
            &&
                (!filterItems.keyWord || (item.name.toLowerCase().includes(filterItems.keyWord.toLowerCase()))) 
        )
} 

module.exports = router;