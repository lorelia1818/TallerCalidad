const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { User} = requiere ("./user")
const {Account} = requiere ("./account")
const { Auth} = requiere ("./auth")
const { Rol} = requiere ("./rol")

const  user = db_connection.define ("user",{
    user_id:{
        type: DataTypes.int
    },
    user_identification: {
        type: DataTypes.Vachar(45)

    },
    user_name:{
        type: DataTypes.Vachar(100)
    },
    user_lastname: {
        type: DataTypes.Vachar(100)

    },
    user_email:{
        type: DataTypes.Vachar(45)
    },
    user_phone: {
        type: DataTypes.Vachar(45)

    },
    user_password:{
        type: DataTypes.Vachar(45)
    },
    account_account_id: {
        type: DataTypes.int,
        references: {
            model : account,
            key:"id"
        } 

    },
    auth_auth_id: {
        type: DataTypes.int,
        references: {
            model : Auth,
            key:"id"
        } 

    },
    rol_rol_id: {
        type: DataTypes.int,
        references: {
            model : Auth,
            key:"id"
        } 

    },

})
const account = db_connection.define("account",{
    account_id:{
        type: DataTypes.int
    },
    account_idcity:{
        type: DataTypes.int
    },
})
const auth = db_connection.define("auth",{
    auth_id:{
        type: DataTypes.int
    },
    auth_password:{
        type: DataTypes.Vachar(45)
    },
})
const rol = db_connection.define("rol",{
    rol:{
        type: DataTypes.int
    },
    rol_name:{
        type: DataTypes.Vachar(100)
    },
    
});
