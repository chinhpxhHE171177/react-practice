// import axios from 'axios';
import axios from './customizeAxios';

const fecthAllUsers = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name, job) => {
    return axios.post("/api/users", { name: name, job: job });
}

export { fecthAllUsers, postCreateUser };

