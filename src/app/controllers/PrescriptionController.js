const { Prescription } = require('../models');
const PrescriptionService = require('../services/PrescriptionService');
const ClinicService = require('../services/ClinicService');
const PatientService = require('../services/PatientService');
const PhysicianService = require('../services/PhysicianService');
const MetricService = require('../services/MetricService');

class PrescriptionController {
    constructor() {
        const clinicConfig = require('../../config/api')['clinics'];
        const patientConfig = require('../../config/api')['patients'];
        const physicianConfig = require('../../config/api')['physicians'];
        const metricConfig = require('../../config/api')['metrics'];


        this.metricService = new MetricService(metricConfig);

        this.prescriptionService = new PrescriptionService({
            clinicService: new ClinicService(clinicConfig),
            patientService: new PatientService(patientConfig),
            physicianService: new PhysicianService(physicianConfig)
        });
    }


    store = async (req, res) => {
        const { clinic, patient, physician, text } = req.body;

        const result = await Prescription
        .create({
            clinic_id: clinic.id,
            patient_id: patient.id,
            physician_id: physician.id,
            text
        });
    
        if (result.toJSON()) {
            try {
                const { id } = result;
                const dependents = await this.prescriptionService.getAllDependentsToMetricService(result);
    
                await this.metricService.send(dependents);
                return res.status(200).json({
                    data: {
                        id,
                        clinic,
                        patient,
                        physician,
                        text
                    }
                });
            } catch (err) {
                console.log(err);
                return res.status(503).json({
                    error: err
                });
            }
        }

        return res.status(500).send();
    }
}

module.exports = new PrescriptionController();