

const pharmacyController = require('../controllers/pharmacy.controllers')


module.exports = app => {
    app.get("/api/communes/:region", pharmacyController.getCommunes);
};