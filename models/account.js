const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { user} = requiere ("./user")
const {account} = requiere ("./account")
const { auth} = requiere ("./auth")
const { rol} = requiere ("./rol")

const  account= db_connection.define ("accoun",{
    account_id:{
        type: DataTypes.int
    },
    account_idcity: {
        type: DataTypes.int

    },

})