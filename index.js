const express = require('express')
const requireDir = require('require-dir')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

app.use(bodyParser.urlencoded({ extended: true }))

const routes = requireDir('./controllers', { recurse: true })

app.get('/', (req, res) => {
	res.send('Helo world!')
})

app.use('/activity-groups', routes.activity)

app.listen(port, () => {
	console.log('Listening on port ', port)
})
