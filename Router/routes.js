const express = require('express');
const dataRouter = require('../Controller/control');


const router = express.Router();

router.get('/getAllData',dataRouter.getAllData);
router.post('/saveData',dataRouter.saveData);
router.get('/getCountryName',dataRouter.getCountryName);


module.exports = router;