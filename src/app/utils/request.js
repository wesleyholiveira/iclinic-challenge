const axios = require("axios").default;
const GenericError = require("../exceptions/GenericError");

class Request {
    constructor(options) {
        this.options = options;
    }

    async get(id) {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.options.token}`;
            const result = await axios.get(`${this.options.url}/${this.options.request.path}/${id}`, {
                timeout: this.options.timeout * 1000
            });
    
            return result.data;
        } catch (err) {
            const response = err.response;
            if (response.status == 404) {
                const { data } = response;
                throw new Error(data.userMessage);
            }
            
            throw new GenericError(response.data.devMessage);
        }
    }

    async post(data) {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.options.token}`;
            const result = await axios.post(`${this.options.url}`, data);
    
            return result.data;
        } catch (err) {
            const response = err.response;
            if (response.status == 404) {
                const { data } = response;
                throw new Error(data.userMessage);
            }
            
            throw new GenericError(response.data.devMessage);
        }
    }
}

module.exports = Request;