const express = require('express');
const route = require('./route/route')
const helmet = require('helmet');
const compression = require('compression');
const router = express.Router();
const app = express();
const {PORT} = require('./configVariable');

app.use(helmet());
app.use(compression());
app.use('/', route);
app.use('*', (req, res, next) => {
    res.status(404).send(`Invalid URL supplied !!!!!!!!!!!!!!!`)
})
app.use('/', (req, res) => {
    res.status(200).json({
        slackUsername: `MallamTY`,
        backend: `True`,
        age: `23`,
        bio: `I am an intermediate backend developer who uses the javaScript technology with intermediate experience using Nodejs framwork. I am also comversant with MongoDB and partially PostgreSQL database. It is important to state that I have experience with cloud computing and familiar with AWS and Oracle cloud platform. It's a great opportunity interning with HNG and look forward to working with great minds.`
    })
})


app.listen(PORT, () => {
    console.log(`\n Server up and running on port ${PORT}..............`);
}) 