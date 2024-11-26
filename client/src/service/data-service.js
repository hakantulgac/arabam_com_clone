import { httpClient } from "./http-client";

const getRequest = (url) => {
    const response = httpClient.get(url);
    return response ? response : []
}

const postRequest = (url, body) => {
    const response = httpClient.post(url, body);
    return response ? response : []
}

export {getRequest, postRequest};