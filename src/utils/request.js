import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api-lacdau-shop.vercel.app/',
});

export const get = async (path, option = {}) => {
    const responsive = await request.get(path, option);
    return responsive.data;
};

export default request;
