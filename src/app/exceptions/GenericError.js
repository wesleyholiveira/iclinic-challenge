class GenericError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = GenericError;