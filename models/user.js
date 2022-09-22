const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { User} = requiere ("./user")
const {Account} = requiere ("./account")
const { Auth} = requiere ("./auth")
const { Rol} = requiere ("./rol")

const  account = db_connection.define ("accoun",{
    account_id:{
        type: DataTypes.int
    },
    account_idcity: {
        type: DataTypes.int

    },

})