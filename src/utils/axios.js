import axios from 'axios';

axios.defaults.baseURL = 'https://blog-api.codeyad-project.ir/';

export default {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put
}