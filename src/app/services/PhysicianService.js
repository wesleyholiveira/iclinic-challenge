const Request = require('../utils/request');
const GenericError = require('../exceptions/GenericError');

class PhysicianService {
    constructor(options) {
        this.request = new Request(options);
    }

    async getPhysician(id) {
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
                code: '02',
                message: err.message
            }
        }
    }
}

module.exports = PhysicianService;