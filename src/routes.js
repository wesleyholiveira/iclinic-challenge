
const router = require('express').Router();
const bodyParser = require('body-parser');
const PrescriptionController = require('./app/controllers/PrescriptionController');
const PrescriptionValidator = require('./app/validators/PrescriptionValidator');

router.use(bodyParser.json())

router.use(PrescriptionValidator.validate);
router.post('/v2/prescriptions', PrescriptionController.store);

module.exports = router;