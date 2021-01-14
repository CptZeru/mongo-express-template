const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
dotenv.config();
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())

require('./routes')(app)

console.log(`Listening on ${process.env.PORT || 8080}`)
app.listen(process.env.PORT || 8080);
