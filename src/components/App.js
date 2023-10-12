import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  
  const onFilterTask = (taskToDisplay) => { 
    setTasks(tasks.filter((task) =>  task === taskToDisplay))
  }
 
  const onDeleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter((task) => taskToBeDeleted !== task));
  };

  


  /*const onClickedCategory = (clickedCategory) => {
    setTasks(tasks.filter((task) => {
      if (clickedCategory === task.category) {
        return task;
      } else {
        return tasks;
      }
    }));
  };*/

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} tasks={tasks}
        //onClickedCategory={onClickedCategory}
      />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} onFilterTask={onFilterTask} />
    </div>
  );
}

export default App;
