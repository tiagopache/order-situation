/* eslint-disable no-console */
module.exports = {
    seed({ Order, Status }) {
        return Promise.all([
            Status.create({ name: 'EM ABERTO' }),
            Status.create({ name: 'PROCESSANDO' }),
            Status.create({ name: 'DESPACHADO' }),
            Status.create({ name: 'CONCLUIDO' }),
            Order.create({ name: 'Order 1', qty: 10, totalValue: 150.40 }),
            Order.create({ name: 'Order 2', qty: 15, totalValue: 50.45 }),
            Order.create({ name: 'Order 3', qty: 20, totalValue: 10.40 }),
            Order.create({ name: 'Order 4', qty: 25, totalValue: 1150.45 }),
            Order.create({ name: 'Order 5', qty: 30, totalValue: 350.60 }),
        ])
            .then(([
                aberto, 
                processando, 
                despachado, 
                concluido, 
                order1, 
                order2, 
                order3, 
                order4, 
                order5
            ]) => {
                return Promise.all([
                    order1.setStatus(aberto),
                    order2.setStatus(aberto),
                    order3.setStatus(despachado),
                    order4.setStatus(concluido),
                    order5.setStatus(processando)
                ]);
            })
            .catch(err => console.error(err));
    }
};
