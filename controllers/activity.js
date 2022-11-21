const router = require('express').Router()

router.get('/', async (req, res) => {
  res.json({
    status: 'Success',
    message: 'Success',
    data: 'Activity'
  })
})

module.exports = router
