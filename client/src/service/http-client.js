import axios from "axios";
import { apiUrl } from "../data/data-provider";

const httpGet = async (url) => {
    try {
        const response = await axios.get(apiUrl+url);
        return response.data;    
    } catch (error) {
        console.log(error);
    }
};

export {httpGet};