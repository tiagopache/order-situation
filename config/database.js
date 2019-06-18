const path = require('path');

module.exports = {
    development: {
        dialect: 'sqlite',
        //logging: console.log,
        logging: null,
        host: 'localhost',
        username: 'root',
        password: 'root',
        storage: path.join(__dirname, '..', 'data', 'order-situation.sqlite')
    }
};