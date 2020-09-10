const joi = require('joi');

class PrescriptionValidator {
    validate(req, res, next) {
        const schema = joi.object().keys({
            clinic: joi.object({
                id: joi.number().required()
            }).required(),
            physician: joi.object({
                id: joi.number().required()
            }).required(),
            patient: joi.object({
                id: joi.number().required()
            }).required(),
            text: joi.string().required()
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: {
                    code: '01',
                    message: 'malformed request'   
                }
            });
        }

        next();
    }
}

module.exports = new PrescriptionValidator();
