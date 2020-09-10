const Request = require('../utils/request');

class ClinicService {
    constructor(options) {
        this.request = new Request(options);
    }

    async getClinic(id) {
        try {
            return await this.request.get(id);
        } catch (err) {
            return {
                code: '07',
                message: err.message
            }
        }
    }
}

module.exports = ClinicService;