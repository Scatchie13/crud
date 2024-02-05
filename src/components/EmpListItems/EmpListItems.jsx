import './EmpListItem.css'

const EmpListItems = (props) => {
  const { name, surname, salary, increase } = props

  let classes = 'list-group-item d-flex justify-content-between'
  if (increase) {
    classes += ' increase'
  }

  return (
    <li className={classes}>
      <span className="list-group-item-label">
        {name} {surname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmpListItems
