import { useState } from 'react'
import './new-task-form.css'

const NewTaskForm = ({ addTask }) => {
  const [value, setValue] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (value.trim() && min.length <= 2 && sec && sec.length <= 2) {
      addTask(value, min, sec)

      setValue('')
      setMin('')
      setSec('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          name="task"
          type="text"
          className="new-todo"
          placeholder="Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <input
          name="min"
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          value={min}
          onChange={(e) => {
            setMin(e.target.value)
          }}
        />
        <input
          name="sec"
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          value={sec}
          onChange={(e) => {
            setSec(e.target.value)
          }}
        />
        <button type="submit" />
      </form>
    </header>
  )
}

export default NewTaskForm
