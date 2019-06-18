/* eslint-disable no-console */
class orderService {
    constructor (model) {
        if (!model)
            throw Error('A model should be informed!');
        
        this.order = model;
    }

    async getOrdersWithStatusSimple() {
        console.log('!!!!!! Performatic way !!!!!!');
        return await this.order
            .findAll({ include: 'status' })
            .then(orders => orders.forEach(order => {
                let output = {
                    id: order.id,
                    name: order.name,
                    qty: order.qty,
                    totalValue: order.totalValue,
                    status: order.status.name
                };

                console.log(output);
            }))
            .catch(err => console.error(err));
    }

    async getOrdersWithoutStatus() {
        console.log('!!!!!! Performatic Way without Status !!!!!!');
        return await this.order
            .findAll()
            .then(orders => orders.forEach(order => {
                let output = {
                    id: order.id,
                    name: order.name,
                    qty: order.qty,
                    totalValue: order.totalValue,
                    statusId: order.statusId
                };

                console.log(output);
            }))
            .catch(err => console.error(err));
    }

    async getOrdersWithStatusByStatus(Status) {
        console.log('!!!!!! NOT Performatic Way !!!!!!');
        return await Status
            .findAll()
            .then(async statuses => {
                return await statuses.forEach(status => {
                    status
                        .getOrders()
                        .then(orders => 
                            orders.forEach(order => {
                                let outputObj = {
                                    id: order.id,
                                    name: order.name,
                                    qty: order.qty,
                                    totalValue: order.totalValue,
                                    status: status.name
                                };
                        
                                console.log(outputObj);
                            })
                        )
                        .catch(err => console.error(err));
                });
            })
            .catch(err => console.error(err));
    }
}

module.exports = orderService;