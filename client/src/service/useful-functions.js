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