import './footer.css'

const Footer = ({ children, clearComplited, items }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`${items} items left`}</span>
      {children}
      <button
        className="clear-completed"
        onClick={() => {
          clearComplited()
        }}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
