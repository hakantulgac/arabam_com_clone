import { apiUrl } from "../data/data-provider";

export const createImageUrl = (vehicleName) => {
    const imageName = vehicleName.split(" ").join("") + ".jpg";
    const url = apiUrl+ "/vehicleImage/" +imageName;
    return url;
}

export const customizeDate = (stringDate) => {
    const date = new Date(stringDate);

    const formatter = new Intl.DateTimeFormat('tr', { month: 'long' });
    const month = formatter.format(date);

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const result = { year: date.getFullYear(), month, day };

    return result;
};
 
export const formattedPrice = (price) => {
    const stringPrice = price.toLocaleString();
    const result = stringPrice.replace(",", ".");
    return result.replace(",", ".");
}

export const createReqBody = (vehicleReqBody) => {
    const body = {}

    vehicleReqBody.minTl && vehicleReqBody.maxTl ? body.priceRange = [vehicleReqBody.minTl, vehicleReqBody.maxTl] : (()=>{})();
    vehicleReqBody.city ? body.city = vehicleReqBody.city: (()=>{})();
    vehicleReqBody.district ? body.district = vehicleReqBody.district: (()=>{})();
    vehicleReqBody.minYear && vehicleReqBody.maxYear ? body.yearRange = [vehicleReqBody.minYear, vehicleReqBody.maxYear] : (()=>{})();
    vehicleReqBody.day ? body.dateRange = vehicleReqBody.day: (()=>{})();
    vehicleReqBody.keyWord ? body.keyWord = vehicleReqBody.keyWord : (()=>{})();

    return body;
}