const express = require('express')
const router = express.Router()
const TaskController = require('../Controllers/TaskController')

router.get('/get' ,TaskController.getTask )
router.post('/save' , TaskController.saveTask)
router.put('/update/:id' , TaskController.updateTask)
router.delete('/delete/:id' , TaskController.deleteTask)

module.exports = router   