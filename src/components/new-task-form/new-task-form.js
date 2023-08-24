import { useState } from "react";
import "./new-task-form.css";

const NewTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      setValue("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
