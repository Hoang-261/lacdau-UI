import axios from 'axios';

const requestApi = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const get = async (path, option = {}) => {
    const responsive = await requestApi.get(path, option);
    return responsive.data;
};
export const post = async (path, option = {}) => {
    const responsive = await requestApi.post(path, option);
    return responsive.data;
};
export default requestApi;
