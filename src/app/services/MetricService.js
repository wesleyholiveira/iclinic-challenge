const Request = require("../utils/request");

const axios = require("axios").default;

class MetricService {
    constructor(options) {
        this.request = new Request(options);
    }

    async send(metricsData) {
        return await this.request.post(metricsData);
    }
}

module.exports = MetricService;