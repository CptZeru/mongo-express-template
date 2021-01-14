const { sendNotFound } = require('./helpers/response')

module.exports = (app) => {
    app.get('/ping', (req, res) =>
        res.send({
            status: 'SUCCESS',
            code: 200,
            message: 'Pong!'
        })
    )

    app.use((req, res) => sendNotFound(res))
}
