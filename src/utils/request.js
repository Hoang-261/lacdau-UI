import axios from 'axios';
import PropTypes from 'prop-types';
const request = axios.create({
    baseURL: 'https://api-lacdau-shop.vercel.app/',
});

export const get = async (path, option = {}) => {
    const responsive = await request.get(path, option);
    return responsive.data;
};
get.propTypes = {
    path: PropTypes.string,
    option: PropTypes.object,
};
export default request;
