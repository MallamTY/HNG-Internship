const express = require('express');
const route = require('./route/route')
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');const router = express.Router();
const app = express();
const {PORT} = require('./configVariable');


app.use(helmet());
app.use(compression());
app.use(cors());
app.use('/', route);
app.use('*', (req, res, next) => {
    res.status(404).send(`Invalid URL supplied !!!!!!!!!!!!!!!`)
})

app.listen(PORT, () => {
    console.log(`\n Server up and running on port ${PORT}..............`);
}) 
