const { Model, DataTypes } = require('sequelize');

class Catalog extends Model {
    static init(sequelize) {
        super.init({

            name: DataTypes.STRING,


        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = Catalog;