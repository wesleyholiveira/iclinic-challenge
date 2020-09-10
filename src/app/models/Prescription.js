const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Prescription = sequelize.define('Prescription', {
        clinic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        patient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        physician_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Prescription.associate = (models) => {
        Prescription.hasOne(models.Clinic);
        Prescription.hasOne(models.Patient);
        Prescription.hasOne(models.Physician);
    }
    return Prescription;
}