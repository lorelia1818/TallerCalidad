//Auxiliar Libraries
const express = require('express');

//Database conection
const {db_conection} = require('./database/connection');

//Using express
const app = express();

//Defining the API port
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json);

//Limitations
app.all('*', function(req, res, next){
    res.header("Access-Con trol-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//Routes
app.use('/api/users', require('./routes/user'));

//Testing the db connection
try {
    const_db_status = db_conection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database.", error);
}

//Server
app.listen(app.get('port'), () => {
    console.log('Server in port: ', 4000);
});