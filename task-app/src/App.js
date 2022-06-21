import { useEffect, useState } from "react";
import "./App.css";
import TaskCreator from "./TaskCreator";
import TaskTable from "./TaskTable";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable task={taskItems} toggleTask={toggleTask} />

      <div>
        <input
          type="checkbox"
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </div>
      {showCompleted=== true && (
        <TaskTable
          task={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
}
export default App;
