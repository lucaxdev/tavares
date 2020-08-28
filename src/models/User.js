const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            datebirth: DataTypes.STRING,
            indication: DataTypes.STRING,
            rg: DataTypes.STRING,
            catalog1: DataTypes.STRING,
            catalog2: DataTypes.STRING,
            catalog3: DataTypes.STRING,
            catalog4: DataTypes.STRING,
            catalog5: DataTypes.STRING,
            catalog6: DataTypes.STRING,
            catalog7: DataTypes.STRING,
            catalog8: DataTypes.STRING,
            pointsupport: DataTypes.STRING,
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            bairro: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = User;