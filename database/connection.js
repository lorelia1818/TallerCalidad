const{ Sequelize } = require('sequilize');

const db_conection = new Sequeliez(
    'tallercalidad',
    'root',
    '182215',{
        host: '127.0.0.1',
        dialect: 'mysql',
        //logging: false
    }
)

module.exports = {
    db_conection
}