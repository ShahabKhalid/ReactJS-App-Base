/*
    Incase we need changes / middleware in axios :)
*/

import axios from 'axios'
import { apiUrl } from '../../config'

axios.defaults.baseURL = apiUrl;

const api = (config) => { 
    return axios(config)
}

export default api
