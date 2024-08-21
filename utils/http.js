import axios from "axios";

const instance = axios.create({
    baseURL:`https://url-backend-rpv8.onrender.com/api`
    // timeout:1000
})

export default instance;