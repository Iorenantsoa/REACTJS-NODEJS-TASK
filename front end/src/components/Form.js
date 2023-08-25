import React, { useEffect, useState } from "react";
import ListTask from "./ListTask";
import axios from 'axios'
import { URI } from "../utils/API";
const Form = () => {

    const [taskInput, setTaskInput] = useState("")
    const [updateUI, setUpdateUI] = useState(false)
    const [tasks, setTasks] = useState([])
    const [updateMode, setUpdateMode] = useState(null)


    useEffect(() => {
        axios.get(`${URI}/get`)
            .then(response => {
                setTasks(response.data)
            })

    }, [updateUI])

    const addTask = () => {
        axios.post(`${URI}/save`, { "task": taskInput })
            .then(response => {
                console.log(response.data)
                setUpdateUI(!updateUI)
                setTaskInput("")
            }).catch(err => {
                console.log(err)
            })
    }

    const updateTask = (id) => {

        axios.put(`${URI}/update/${id}`, { "task": taskInput })
            .then(response => {
                window.alert('task updated')
                setUpdateUI(!updateUI)
                setTaskInput("")
                setUpdateMode(null)
            }).catch(err => {
                console.log(err)
                setUpdateMode(null)
            })
    }

    const btnSubmit = updateMode ? <button type='submit' className={`${taskInput==="" && "disabled"} btn btn-primary`} onClick={() => updateTask(updateMode)} style={{ "marginLeft": "5px" }}>Edit task</button> : <button type='submit' className={`${taskInput==="" && "disabled"} btn btn-primary`} onClick={addTask} style={{ "marginLeft": "5px" }}>Add new task</button>

    return (
        <>
            <div className=" d-flex justify-content-center">
                <div>
                    <input value={taskInput} type="text" className="form-control" onChange={(e) => setTaskInput(e.target.value)} />
                </div>
                <div>
                    {
                        btnSubmit 
                    }
                </div>
            </div>
            <ListTask setUpdateMode={setUpdateMode} setTaskInput={setTaskInput} setUpdateUI={setUpdateUI} tasks={tasks} />
        </>
    );
};

export default Form;
// className={`${taskInput==="" && "disabled"} btn btn-primary`}