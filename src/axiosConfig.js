import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sandwich-builder-ba9db.firebaseio.com/',
});

export default instance;