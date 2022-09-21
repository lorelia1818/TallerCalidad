//Import
const {SERVER_ERROR} = require('../utils/constants');

//Models
const {account} = require('../models/account');
const {auth} = require('../models/auth');
const {rol} = require('../models/rol');
const {User} = require('../models/user');

//Controllers
const getSpecificCustomers = async (req, res) => {
    try {
        const account = await account.findBypk (req.account_id);
        const auth = await auth.findBypk (req.auth_id);
        const rol = await rol.findBypk (req.roled_id);
        const user = await user.findBypk (req.user_id);


        res.json({
            ...account.datavalues,
            ...auth.datavalues,
            ...rol.datavalues,
            ...user.datavalues,
        });
    }catch(e){
        console.log(e);
        res
            .status(500)
            .json(SERVER_ERROR);
    }
};

module.exports - {
    getSpecificCustomers
};