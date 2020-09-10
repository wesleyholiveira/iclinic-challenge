'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('prescriptions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      clinic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'clinics'
          },
          key: 'id'
        },
      },
      physician_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'physicians'
          },
          key: 'id'
        },
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'patients'
          },
          key: 'id'
        },
      },
      text: Sequelize.TEXT,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prescriptions');
  }
};
