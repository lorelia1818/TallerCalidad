const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { user} = requiere ("./user")
const {account} = requiere ("./account")
const { auth} = requiere ("./auth")
const { rol} = requiere ("./rol")

const  rol = db_connection.define ("rol",{
    auth_id:{
        type: DataTypes.int
    },
    account_idcity: {
        type: DataTypes.Varchar(45)

    },

})