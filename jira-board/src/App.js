import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newIssueNames, setNewIssueNames] = useState({
    todo: "",
    wip: "",
    complete: "",
  });
  const [creating, setCreating] = useState({
    todo: false,
    wip: false,
    complete: false,
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDrop = (event, cat) => {
    let id = event.dataTransfer.getData("id");
    let newTasks = tasks.map((task) => {
      if (task.name === id) {
        return { ...task, category: cat };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const openCreateIssue = (category) => {
    setCreating({ ...creating, [category]: true });
  };

  const createIssue = (category) => {
    const issueName = newIssueNames[category];
    if (issueName.trim() === "") return;

    const fixedColor = "lightyellow"; // Set a fixed color for all tasks
    const newIssue = `${issueName}`;
    const newTask = {
      name: newIssue,
      category,
      bgcolor: fixedColor,
    };

    setTasks([...tasks, newTask]);
    setNewIssueNames({ ...newIssueNames, [category]: "" });
    setCreating({ ...creating, [category]: false });
    setConfirmationMessage("Issue created successfully!");
  };

  const editIssue = (oldName) => {
    const updatedName = prompt("Edit issue name:", oldName);
    if (updatedName) {
      setTasks(
        tasks.map((task) =>
          task.name === oldName ? { ...task, name: updatedName } : task
        )
      );
      setConfirmationMessage("Issue updated successfully!");
    }
  };

  const deleteIssue = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
    setConfirmationMessage("Issue deleted successfully!");
  };

  const getTask = () => {
    const tasksToRender = {
      todo: [],
      wip: [],
      complete: [],
    };

    tasks.forEach((t) => {
      tasksToRender[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="task-card"
          style={{ backgroundColor: t.bgcolor }}
        >
          <span>{t.name}</span>
          <button className="edit-btn" onClick={() => editIssue(t.name)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteIssue(t.name)}>
            Delete
          </button>
        </div>
      );
    });

    return tasksToRender;
  };

  return (
    <div className="drag-drop-container">
      <h2 className="drag-drop-header">Jira Board</h2>
      {confirmationMessage && (
        <div className="confirmation-message">{confirmationMessage}</div>
      )}
      <div className="drag-drop-board">
        <div
          className="todo"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "todo")}
        >
          <div className="task-header">TO DO</div>
          {creating.todo ? (
            <div className="create-form">
              <input
                type="text"
                value={newIssueNames.todo}
                onChange={(e) =>
                  setNewIssueNames({ ...newIssueNames, todo: e.target.value })
                }
                placeholder="New issue name"
              />
              <button onClick={() => createIssue("todo")} className="create-issue-btn">
                Create Issue
              </button>
            </div>
          ) : (
            <button onClick={() => openCreateIssue("todo")} className="create-issue-btn">
              + Create issue
            </button>
          )}
          {getTask().todo}
        </div>
        <div
          className="wip"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "wip")}
        >
          <div className="task-header">IN PROGRESS</div>
          {creating.wip ? (
            <div className="create-form">
              <input
                type="text"
                value={newIssueNames.wip}
                onChange={(e) =>
                  setNewIssueNames({ ...newIssueNames, wip: e.target.value })
                }
                placeholder="New issue name"
              />
              <button onClick={() => createIssue("wip")} className="create-issue-btn">
                Create Issue
              </button>
            </div>
          ) : (
            <button onClick={() => openCreateIssue("wip")} className="create-issue-btn">
              + Create issue
            </button>
          )}
          {getTask().wip}
        </div>
        <div
          className="complete"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "complete")}
        >
          <div className="task-header">
            DONE <span className="done-check">&#10003;</span>
          </div>
          {creating.complete ? (
            <div className="create-form">
              <input
                type="text"
                value={newIssueNames.complete}
                onChange={(e) =>
                  setNewIssueNames({ ...newIssueNames, complete: e.target.value })
                }
                placeholder="New issue name"
              />
              <button
                onClick={() => createIssue("complete")}
                className="create-issue-btn"
              >
                Create Issue
              </button>
            </div>
          ) : (
            <button
              onClick={() => openCreateIssue("complete")}
              className="create-issue-btn"
            >
              + Create issue
            </button>
          )}
          {getTask().complete}
        </div>
      </div>
    </div>
  );
}

export default App;
