const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { User} = requiere ("./user")
const {Account} = requiere ("./account")
const { Auth} = requiere ("./auth")
const { Rol} = requiere ("./rol")

const  auth = db_connection.define ("auth",{
    auth_id:{
        type: DataTypes.int
    },
    account_idcity: {
        type: DataTypes.Varchar(45)

    },

})