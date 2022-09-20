//Import
const {SERVER_ERROR} = require('../utils/constants');

//Models
const {Company} = require('../models/company');
const {Customer} = require('../models/customer');
const {User} = require('../models/user');

//Controllers
const getSpecificCustomers = async (req, res) => {
    try {
        const user = await User.findBypk (req.headers.id);
        const comapny = await Comapny.findBypk (user.Company.id);
        const client = await Customer.findBypk (user.client.id);

        res.json({
            ...user.datavalues,
            ...client.datavalues,
            ...Company.datavalues
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