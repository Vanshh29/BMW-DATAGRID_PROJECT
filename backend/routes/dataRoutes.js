const express = require('express');
const router = express.Router();
const { getData, getDataById, deleteData } = require('../controllers/dataController');

router.get('/', getData);
router.get('/:id', getDataById);
router.delete('/:id', deleteData);

module.exports = router;
