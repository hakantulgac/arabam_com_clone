import axios from "axios";

const httpGet = async (url) => {
    const root = "https://arabam-api.onrender.com"
    try {
        const response = await axios.get(root+url);
        return response.data;    
    } catch (error) {
        console.log(error);
    }
};

export {httpGet};