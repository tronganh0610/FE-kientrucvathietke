
import axios from 'axios'



axios.interceptors.request.use(
    function (config) {

        const token = localStorage.getItem("authorization")
        if (token?.length > 0)
            config.headers['Authorization'] = `Bearer ${token}`
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    },
)
class  BaseService {
    constructor(){
        this.config ="http://localhost:80"
    }
    async VerifyLogin(params) {
        return axios
            .get(this.API_AUTH + '/verifycustomer', { params })
            .then(this.handleResponse)
            .catch((error) => {
                if (error.status === 401 || error.response === undefined) {
                    error.response = {
                        status: 401,
                        message: 'unauthorized_client',
                    }
                }
                return this.handleError(error)
            })
    }
}

BaseService.propTypes = {
}

export default BaseService