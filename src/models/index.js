const { ModelsLoader } = require('../infra/sequelize');

const Sequelize = require('sequelize');
const { db: config } = require('config');

if (config) {
    const sequelize = new Sequelize(config);

    module.exports = ModelsLoader.load({
        sequelize,
        baseFolder: __dirname
    });
} else {
    // eslint-disable-next-line no-console
    console.error('No database was configured.');
}