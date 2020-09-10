const Request = require('../utils/request');
const GenericError = require('../exceptions/GenericError');

class PatientService {
    constructor(options) {
        this.request = new Request(options);
    }

    async getPatient(id) {
        try {
            return await this.request.get(id);
        } catch (err) {
            if (err instanceof GenericError) {
                return {
                    code: '05',
                    message: `${err}`
                }
            }

            return {
                code: '03',
                message: err.message
            }
        }
    }
}

module.exports = PatientService;