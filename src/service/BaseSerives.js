import axios from "axios";

axios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("authorization");
        if (token?.length > 0) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
class BaseService {
    constructor() {
        this.config = "http://localhost:80";
    }
    handleResponse(response) {
        if (response.status === 401) {
            localStorage.removeItem("authorization")
            return window.location.assign("http://localhost:3000/login")
        }
        return response;
    }

    handleError(errorEncode) {
        let error = { ...errorEncode };
        switch (true) {
            case error.response !== undefined && error.response !== null:
                error = {
                    status: error.response.status,
                    message: error.response.data ?? "HTTP error",
                };
                break;
            case error.request !== undefined && error.request !== null:
                error = {
                    status: error.request.status,
                    message: error.request.data ?? "HTTP error",
                };
                break;
            case error.message?.length > 0:
                error = {
                    status: error.status ?? 400,
                    message: error.message,
                };
                break;
            default:
                error = {
                    status: 400,
                    message: "HTTP error",
                };
                break;
        }
        if (error.message?.startsWith?.("#")) {
            const idx = error.message.indexOf("-");
            if (idx !== -1) error.message = error.message.slice(idx + 1, error.message.length);
        } else if (error.message?.startsWith?.("<!DOCTYPE html>")) {
            error.message = "HTTP error";
        }
        return error;
    }
    async VerifyLogin(params) {
        return axios
            .get(this.API_AUTH + "/verifycustomer", { params })
            .then(this.handleResponse)
            .catch((error) => {
                if (error.status === 401 || error.response === undefined) {
                    error.response = {
                        status: 401,
                        message: "unauthorized_client",
                    };
                }
                return this.handleError(error);
            });
    }
}

BaseService.propTypes = {};

export default BaseService;
