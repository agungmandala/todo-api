const router = require('express').Router()
const prisma = require('../lib/prisma')

router.get('/', async (req, res) => {
  const activity = await prisma.activity.findMany()

  res.json({
    status: 'Success',
    message: 'Success',
    data: activity
  })
})

router.post('/', async (req, res) => {
  const { title, email } = req.body

   const createActivity = await prisma.activity.create({
     data: {
       title: title,
       email: email,
     },
   })

  res.json({
    status: 'Success',
    message: 'Success',
    data: createActivity
  })
})

router.get('/:id', async (req, res) => {
  const activity = await prisma.activity.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  })

  res.json({
    status: 'Success',
    message: 'Success',
    data: activity
  })
})

router.put('/:id', async (req, res) => {
  const { title, email } = req.body
  const updateActivity = await prisma.activity.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      title,
      email
    }
  })

  res.json({
    status: 'Success',
    message: 'Success',
    data: updateActivity
  })
})

router.delete('/:id', async (req, res) => {
  const deleteActivity = await prisma.activity.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })

  res.json({
    status: 'Success',
    message: 'Success',
    data: deleteActivity
  })
})

module.exports = router
