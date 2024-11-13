import { MdCheck, MdDeleteForever } from "react-icons/md";
import { setLocalStorageData } from "./ToLocalStorageHandle";

export const TodoList = ({ tasks, setTask }) => {
  function handleDelete(value) {
    const updatedTasks = tasks.filter((task) => task.content !== value);
    setTask(updatedTasks);
    setLocalStorageData(updatedTasks);
  }

  function handleToggleCheck(value) {
    const toggledTasks = tasks.map((task) => {
        console.log(task.content, value);
      if (task.content === value) {
        return { ...task, checked: !task.checked };
      }
      return task;
      
    });
    console.log(toggledTasks);
    setTask(toggledTasks);
    setLocalStorageData(toggledTasks);
  }

  return (
    <section>
      <ul className="myUnorderedList todo-list">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="todo-item">
              <span
                className={`${task.checked ? "checkList" : "notCheckedList"}`}
              >
                {task.content}
              </span>
              <button
                onClick={() => handleToggleCheck(task.content)}
                className="check-btn"
              >
                <MdCheck />
              </button>
              <button
                onClick={() => handleDelete(task.content)}
                className="delete-btn"
              >
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
