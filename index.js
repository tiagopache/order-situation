/* eslint-disable no-console */
const init = require('./src/services/init');
const { database, order: Order, status: Status } = require('./src/models');
const OrderService = require('./src/services/order');

database
    .authenticate()
    .then(() => {
        console.log('DB Connected and Authenticated');
    })
    .catch(err => {
        console.error('Error connecting or authenticating to DB. err:', err);
    });

const orderService = new OrderService(Order);

database
    .sync({ force: true })
    .then(() => init.seed({ Order, Status }))
    .then(async () => {
        return await orderService.getOrdersWithStatusSimple()
            .then(() => orderService.getOrdersWithoutStatus())
            .then(() => orderService.getOrdersWithStatusByStatus(Status));
    })
    .catch(err => console.error(err));