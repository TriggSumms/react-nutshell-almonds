import React, { useState, useEffect } from "react"
import TaskManager from "../../modules/TaskManager"

const TaskEditForm = props => {
    const [task, setTask] = useState({ name: "", completeStatus: false, completeDate: "", userId: 0 });
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
        completeDate: task.completeDate,
        userId: task.userId
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
                            type="hidden"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={task.userId}
                        />

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
                        <label htmlFor="completeDate">Due date</label>

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