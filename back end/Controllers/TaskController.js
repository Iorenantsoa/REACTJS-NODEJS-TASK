const Task = require('../Models/TaskModel')

const getTask = (req, res) => {

    Task.find()
        .then((response) => {
            console.log(response)
            res.send(response)

        }).catch(err => {
            console.log(err)
            res.send({ err })
        })
}
const saveTask = (req, res) => {
    newTask = new Task({
        task: req.body.task
    })
    newTask.save()
        .then(response => {
            res.send(response)
        }).catch(err => {
            console.log(err)
            res.send({ err })
        })
}
const updateTask = (req, res) => {
    const id = req.params.id
    const task = req.body.task

    Task.findByIdAndUpdate(id, { task })
        .then(response => {
            console.log('taks updated successfully')
            res.send(response)
        }).catch(err => {
            console.log(err)
            res.send({ err })
        })
}
const deleteTask = (req, res) => {
    const id = req.params.id
    Task.findByIdAndDelete(id).then(response => {
        console.log('task deleted successfully')
        res.send(response)
    }).catch(err => {
        console.log(err)
        res.send({ err })
    })
}


module.exports = { getTask, saveTask, updateTask, deleteTask }