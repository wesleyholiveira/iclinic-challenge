module.exports = {
    clinics: {
        url: process.env.APP_URL_CLINIC,
        token: process.env.APP_TOKEN_CLINIC,
        timeout: 4,
        retry: 2,
        request: {
            path: 'clinics'
        }
    },
    physicians: {
        url: process.env.APP_URL_PHYSICIAN,
        token: process.env.APP_TOKEN_PHYSICIAN,
        timeout: 5,
        retry: 3,
        request: {
            path: 'physicians'
        }
    },
    patients: {
        url: process.env.APP_URL_PATIENT,
        token: process.env.APP_TOKEN_PATIENT,
        timeout: 3,
        retry: 2,
        request: {
            path: 'patients'
        }
    },
    metrics: {
        url: process.env.APP_URL_METRIC,
        token: process.env.APP_TOKEN_METRIC,
        timeout: 6,
        retry: 5,
    },
}