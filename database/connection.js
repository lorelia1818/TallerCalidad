const{ Sequelize } = require('sequilize');

const db_conection = new Sequelize(
    'tallercalidad',
    'root',
    '',{
        host: '127.0.0.1',
        dialect: 'mysql',
        //logging: false
    }
)

module.exports = {
    db_conection
}