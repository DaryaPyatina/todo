import './tasks-filter.css'

const TasksFilter = ({ filter, setCurrentFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => {
            setCurrentFilter('all')
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === 'active' ? 'selected' : ''}
          onClick={() => {
            setCurrentFilter('active')
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === 'completed' ? 'selected' : ''}
          onClick={() => {
            setCurrentFilter('completed')
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter
