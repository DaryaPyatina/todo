import './tasks-filter.css'

const TasksFilter = ({ filter, setCurrentFilter }) => {
  const filters = ['all', 'active', 'completed']
  const obj = { all: 'All', active: 'Active', completed: 'Completed' }
  return (
    <ul className="filters">
      {filters.map((elem) => {
        return (
          <li key={elem}>
            <button
              className={filter === elem ? 'selected' : ''}
              onClick={() => {
                setCurrentFilter(elem)
              }}
            >
              {obj[elem]}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TasksFilter
