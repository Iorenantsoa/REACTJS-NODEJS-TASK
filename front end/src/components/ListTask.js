import React from 'react'
import axios from 'axios'
import { URI } from '../utils/API'


const ListTask = ({ tasks, setUpdateUI, setTaskInput, setUpdateMode }) => {

    const deleteTask = (id) => {
        axios.delete(`${URI}/delete/${id}`)
            .then(Response => {
                console.log('task delete successfully')
                setUpdateUI((prevState) => (!prevState))
            }).catch(err => {
                console.log(err)
            })
    }

    const editClick = (id, task) => {
        setTaskInput(task)
        setUpdateMode(id)
    }



    return (
        <div className='col-md-6 col-lg-6 col-sm-8  mt-2 card ' style={{ "margin": "auto" }}>
            <ul className="list-group">
                {
                    tasks.length > 0 ? tasks.map((task) => {
                        return (
                            <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
                                {task.task}
                                <span><button className='btn btn-default' onClick={() => editClick(task._id, task.task)}>Edit</button> <button className='btn btn-danger' onClick={() => deleteTask(task._id)}>Delete</button></span>
                            </li>
                        )

                    }) : <li className="list-group-item d-flex justify-content-center align-items-center">
                            Aucun data
                        </li>
                }

            </ul>
        </div>
    )
}

export default ListTask

