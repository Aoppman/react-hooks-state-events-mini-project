import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks, onDeleteTask, onFilterTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          onDeleteTask={onDeleteTask}
          key={uuidv4()}
          task={task}
          onFilterTask={onFilterTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
