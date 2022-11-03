const express = require('express');
const { postEndpoint, getEndpoint } = require('../controllers.js/controller');
const router = express.Router();


router.get(['/', '/home'], getEndpoint)

router.post('/post', postEndpoint)

module.exports = router;