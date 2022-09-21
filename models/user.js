const{  DataTypes } = require('sequelize');
const {db_connection} = require('./database/connection');

const { user} = requiere ("./user")
const {account} = requiere ("./account")
const { auth} = requiere ("./auth")
const { rol} = requiere ("./rol")

const user = db_connection.define("user",{
    user_id {
        tyoe: DataTypes.int
    },
    user_identificacion:{
        type:DataTypes.Vachar(45)

    },
    user_name: {
        Type: DataTypes.Vachar(100)
    },
    use_lastname: {
        type: DataTypes.vachar(100)

    },
    user_gmail: {
        Type: DataTypes.Vachar(45)
    },
    use_phone: {
        type: DataTypes.vachar(45)

    },
    use_pasword: {
        type: DataTypes.vachar(45)

    },
    account_id: {
        type:DataTypes.int,
        references:{
        model: account,
        key:"id"
        }
    },
    account_account_id: {
        type:DataTypes.int,
        references:{
        model: account,
        key:"id"
        }
    },
    account_account_id: {
        type:DataTypes.int,
        references:{
        model: account,
        key:"id"
        }
    },
    


})
