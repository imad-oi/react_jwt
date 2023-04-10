import axios  from "axios";

import { accountService } from "./account.services";

let Axios = axios.create({
    baseURL: "http://localhost:5000/api",
});


Axios.interceptors.request.use(
    config => {
        if (accountService.isLogged()) {
            let token = accountService.getToken();
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);


export default Axios;