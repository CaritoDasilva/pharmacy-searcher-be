const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json(), express.urlencoded({ extended: true }));

const pharmacyRoutes = require("./server/routes/pharmacy.routes");
pharmacyRoutes(app);

app.listen(port, () => console.log(`Hi pretty girl! Im listening you in the port: ${port}`))