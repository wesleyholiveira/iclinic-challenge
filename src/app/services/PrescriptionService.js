const { clinics, patients, physicians } = require("../../config/api");

class PrescriptionService {
    constructor({
        clinicService,
        patientService,
        physicianService
    }) {
        this.clinicService = clinicService;
        this.patientService = patientService;
        this.physicianService = physicianService;
    }

    async getAllDependentsToMetricService(prescription) {
        const { clinic_id, patient_id, physician_id } = prescription;
        let { data: clinicResult } = await this.clinicService.getClinic(clinic_id);
        const { 
            data: patientResult,
            code: errCodePatient,
            message: errMessagePatient
        } = await this.patientService.getPatient(patient_id);
        const {
            data: physicianResult, 
            code: errCodePhysician,
            message: errMessagePhysician
        } = await this.physicianService.getPhysician(physician_id);

        if (!clinicResult) {
            clinicResult = {};
            clinicResult.id = clinic_id;
            clinicResult.name = '';
        }

        if (errCodePatient) {
            return {
                code: errCodePatient,
                message: errMessagePatient
            }
        }

        if (errCodePhysician) {
            return {
                code: errCodePhysician,
                message: errMessagePhysician
            }
        }

        return {
            clinic_id: clinicResult.id || clinic_id,
            clinic_name: clinicResult.name || '',
            physician_id: physicianResult.id,
            physician_name: physicianResult.fullName,
            physician_crm: physicianResult.crm,
            patient_id: patientResult.id,
            patient_name: patientResult.fullName,
            patient_email: patientResult.email,
            patient_phone: patientResult.phone
        }
    }
}

module.exports = PrescriptionService;