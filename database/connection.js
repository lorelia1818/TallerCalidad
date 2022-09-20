const{ Sequelize } = require('sequilize');

const db_conection = new Sequelize(
    'taller_calidad',
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