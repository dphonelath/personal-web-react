const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const path = require('path')

const app = express()


app.use(cors())
app.use(express.static(`${__dirname}/../react-client/dist`))


app.get('*', (req, res) => {
    console.log('hello')
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`))
})

function notFound(req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl});
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err);
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined;
    res.status(500).send({error: err.message, stack, url: req.originalUrl});
}

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})