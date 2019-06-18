module.exports = function(sequelizeConnection, dataTypes) {

    const Order = sequelizeConnection.define('order', 
        {
            // Attributes
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            qty: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            totalValue: {
                type: dataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        },
        {
            // Options
        });

    Order.associate = (models) => {
        Order.belongsTo(models.status);
    };

    return Order;
};