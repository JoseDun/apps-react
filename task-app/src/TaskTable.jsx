import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ task, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) => {

    return(
        task
        .filter(task =>  task.done === doneValue)
        .map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
    )
  };

  return (
    <table>
      <thead>
        <tr>Tasks </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
