import React, { useState, useEffect } from 'react';
//import the components we will need
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';

const TaskList = (props) => {
    // The initial state is an empty array
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        // After the data comes back from the API, we
        //  use the setTasks function to update state
        return TaskManager.getAll().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };

    // got the tasks from the API on the component's first render
    useEffect(() => {
        getTasks()
    }, []);

    const deleteTask = id => {
        TaskManager.delete(id)
            .then(() => TaskManager.getAll().then(setTasks));
    };

    // Finally we use map() to "loop over" the tasks array to show a list of task cards
    return (
        <>
            

            <div className="container-cards">
                {tasks.map(task => {
                    if (task.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                {...props} 
                            />
                        )
                    }
                })}
            </div>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/tasks/new") }}>
                    New Task
                </button>
            </section>
        </>
    );
};

export default TaskList