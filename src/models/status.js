module.exports = function (sequelizeConnection, dataTypes) {
    const Status = sequelizeConnection.define(
        'status', 
        {
            // Attributes
            name: {
                type: dataTypes.STRING,
                allowNull: false
            }
        }, 
        {
            // Options
            timestamps: false
        });

    Status.associate = (models) => {
        Status.hasMany(models.order);
    };

    return Status;
};