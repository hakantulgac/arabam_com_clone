import axios from "axios";
import { apiUrl } from "../data/data-provider";

const httpClient = {
    get: async (url) => {
        try {
            const response = await axios.get((apiUrl + url), config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    post: async (url, body) => {
        try {
            const response = await axios.post((apiUrl + url), body, config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export { httpClient };