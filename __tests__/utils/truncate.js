const { sequelize } = require('../../src/app/models');

module.exports = async () => {
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({
            force: true,
            truncate: true,
        });
    }));
}