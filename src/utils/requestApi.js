import axios from 'axios';
import PropTypes from 'prop-types';
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

get.propTypes = {
    path: PropTypes.string,
    option: PropTypes.object,
};
post.propTypes = {
    path: PropTypes.string,
    option: PropTypes.object,
};
export default requestApi;
