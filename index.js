const express = require('express')
const requireDir = require('require-dir')
const app = express()
const port = 3001

const routes = requireDir('./controllers', { recurse: true })

app.get('/', (req, res) => {
	res.send('Helo world!')
})

app.use('/activity-groups', routes.activity)

app.listen(port, () => {
	console.log('Listening on port ', port)
})
