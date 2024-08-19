// import axios from 'axios';
import axios from './customizeAxios';

const fecthAllUsers = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export { fecthAllUsers };

