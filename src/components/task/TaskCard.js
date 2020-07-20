import React from "react";
import "./Task.css";

const TaskCard = props => {

    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="card-taskname">{props.task.name}</span>
                    <p>Due: {props.task.completeDate}</p>
                    <p>Status: {props.task.completeStatus ? "Complete" : "In progress"}</p>
                    <button type="button" onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
                </h3>
            </div>
        </div>
    );
};


export default TaskCard;