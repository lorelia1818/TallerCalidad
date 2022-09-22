const{ Sequelize } = require('sequelize');

const db_connection = new Sequelize(
    'tallercalidad',
    'root',
    '',{
        host: 'localhost',
        dialect: 'mysql',
        //logging: false
    }
)

module.exports = {
    db_connection
}