import { useState } from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../timer/timer'

const Task = ({ task, deleteTask, toggleChecked, editTodo }) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(task.name)
  const [timerStatus, setTimerStatus] = useState('stop')

  const onStartTask = () => {
    setTimerStatus('play')
  }

  const onPauseTask = () => {
    setTimerStatus('pause')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      editTodo(task.id, value)
      setEdit(false)
    }
  }

  const toggleEdit = () => {
    setEdit((prev) => !prev)
  }

  const onDelete = () => {
    deleteTask(task.id)
  }

  return (
    <>
      {!edit ? (
        <li className={`completed ${task.visible ? '' : 'hidden'}`}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={task.checked}
              onChange={() => {
                toggleChecked(task.id)
              }}
            />
            <label>
              <span className={`title  ${task.checked ? 'line-through' : ''}`}>{task.name}</span>
              <span className="description">
                <button onClick={onStartTask} className="icon icon-play "></button>
                <button onClick={onPauseTask} className="icon icon-pause"></button>
                <Timer timerStatus={timerStatus} timer={task.time} />
              </span>

              <span className="created">
                {formatDistanceToNow(Date.parse(task.createDate), {
                  addSuffix: true,
                })}
              </span>
            </label>
            <button className="icon icon-edit" onClick={toggleEdit}></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
          </div>
        </li>
      ) : (
        <li className="editing">
          <div className="view">
            <label>
              <span className="description">{task.name}</span>
              <span className="created">
                {formatDistanceToNow(Date.parse(task.createDate), {
                  addSuffix: true,
                })}
              </span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="edit"
              value={value}
              autoFocus
              onBlur={() => {
                setEdit(false)
              }}
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
          </form>
        </li>
      )}
    </>
  )
}

export default Task
