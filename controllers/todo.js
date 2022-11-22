const router = require('express').Router()
const prisma = require('../lib/prisma')

router.get('/', async (req, res) => {
  const todo = await prisma.todo.findMany()

  res.json({
    status: 'Success',
    message: 'Success',
    data: todo
  })
})

router.post('/', async (req, res) => {
  const { activity_group_id, title } = req.body

   const createTodo = await prisma.todo.create({
     data: {
        activity_group_id: parseInt(activity_group_id),
        title,
        is_active: 1,
        priority: "very-high"
     },
   })

  res.json({
    status: 'Success',
    message: 'Success',
    data: createTodo
  })
})

router.get('/:id', async (req, res) => {
  const todo = await prisma.todo.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  })

  res.json({
    status: 'Success',
    message: 'Success',
    data: todo
  })
})

router.put('/:id', async (req, res) => {
  const { title } = req.body

  const updateTodo = await prisma.todo.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      title
    }
  })

  res.json({
    status: 'Success',
    message: 'Success',
    data: updateTodo
  })
})

router.delete('/:id', async (req, res) => {
  const deleteActivity = await prisma.todo.delete({
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
