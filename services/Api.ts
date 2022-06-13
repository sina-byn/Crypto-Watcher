import axios from 'axios';

const axiosObj =  axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});

export default axiosObj;