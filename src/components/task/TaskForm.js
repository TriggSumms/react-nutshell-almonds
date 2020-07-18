import React, { useState } from 'react';
import TaskManager from '../../modules/TaskManager';
import './TaskForm.css';

const TaskForm = props => {
    const [task, setTask] = useState({ name: "", completeStatus: false, completeDate: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    /* Local method for validation, set loadingStatus, create task object, invoke the TaskManager post method, and redirect to the full task list */
    const constructNewTask = evt => {
        evt.preventDefault();
        if (task.name === "" || task.completeDate === "") {
            window.alert("Please input a task name and date");
        } else {
            setIsLoading(true);
            // Create the task and redirect user to task list
            TaskManager.post(task)
                .then(() => props.history.push("/tasks"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={task.name}
                        />
                        <label htmlFor="name">Task name</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="completeDate"
                            value={task.completeDate}
                        />
                        <label htmlFor="phoneNumber">Date</label>
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default TaskForm