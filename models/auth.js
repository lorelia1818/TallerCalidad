const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { user} = requiere ("./user")
const {account} = requiere ("./account")
const { auth} = requiere ("./auth")
const { rol} = requiere ("./rol")

const  auth = db_connection.define ("auth",{
    auth_id:{
        type: DataTypes.int
    },
    account_idcity: {
        type: DataTypes.Varchar(45)

    },

})