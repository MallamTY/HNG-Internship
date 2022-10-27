const express = require('express');
const router = express.Router();

router.get(['/', '/home'], (req, res) => {
    res.status(200).json({
        slackUsername: `MallamTY`,
        backend: `True`,
        age: `23`,
        bio: `I am an intermediate backend developer who uses the javaScript technology with intermediate experience using Nodejs framwork. I am also comversant with MongoDB and partially PostgreSQL database. It is important to state that I have experience with cloud computing and familiar with AWS and Oracle cloud platform. It's a great opportunity interning with HNG and look forward to working with great minds.`
    })
})

module.exports = router;