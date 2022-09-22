const{ Sequelize } = require('sequelize');

const db_connection = new Sequelize(
    'tallercalidad',
    'root',
    '',{
        host: '127.0.0.1',
        dialect: 'mysql',
        //logging: false
    }
)

module.exports = {
    db_connection
}