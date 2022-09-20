//auxiliar libreries
const express = require ("express");

//database connection

// using Express 

const app = express();

//Defining the API port
app.set("port", process.env.PORT || 4000)

//Middlewares
app.set (express.json())
//limitations
app.all("*" , function (req ,res ,next) {
res.header("access-Control-allow-origin", "*");
res.header("access-Control-allow-Headers", "*");
res.header("access-Control-allow-Methods", "PUT , POST,GET,DELETE,OPTIONS ");
}
)
// Routes
//app.use ("/api/users", require ("./routes/user"));

//server
app.listen(app.get("port") ,() => {

    console.log("server in port:", 4000)
})