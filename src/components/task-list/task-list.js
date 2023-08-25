import './task-list.css'

const TaskList = (props) => {
  return <ul className="todo-list">{props.children}</ul>
}

export default TaskList
