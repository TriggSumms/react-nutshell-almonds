import React, { useState, useEffect } from "react"
import TaskManager from "../../modules/TaskManager"

const TaskEditForm = props => {
    const [task, setTask] = useState({ name: "", completeStatus: false, completeDate: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedTask = {
        id: props.match.params.taskId,
        name: task.name,
        completeStatus: task.completeStatus,
        completeDate: task.completeDate
    };

    TaskManager.update(editedTask)
        .then(() => props.history.push("/tasks"))
    }

    useEffect(() => {
        TaskManager.get(props.match.params.taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            });
    }, []);

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
                            type="button" disabled={isLoading}
                            onClick={updateExistingTask}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default TaskEditForm