import { useState } from 'react'
import './EmpListItem.css'

const EmpListItems = (props) => {
  const { name, surname, salary, onDelete } = props
  const [increaseHandle, setIncreaseHandle] = useState(false)
  const [star, setStar] = useState(false)

  let classes = 'list-group-item d-flex justify-content-between'
  if (increaseHandle) {
    classes += ' increase'
  }
  if (star) {
    classes += ' like'
  }

  const onIncrease = () => {
    setIncreaseHandle(!increaseHandle)
  }

  const onStar = () => {
    setStar(!star)
  }

  return (
    <li className={classes}>
      <span onDoubleClick={onStar} className="list-group-item-label">
        {name} {surname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onIncrease}
          type="button"
          className="btn-cookie btn-sm"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmpListItems
