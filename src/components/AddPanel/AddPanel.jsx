import { useState } from 'react'

import './AddPanel.css'

const AddPanel = () => {
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')

  const onValueChange = (e) => {
    e.preventDefault()
    setName(e.target.value)

    console.log(name)
  }

  const onSalaryChange = (e) => {
    e.preventDefault()
    setSalary(e.target.value)
    console.log(salary)
  }

  return (
    <div className="app-add-form">
      <h3>Add new employees</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          value={name}
          className="form-control new-post-label"
          placeholder="Name?"
          onChange={onValueChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary $?"
          value={salary}
          onChange={onSalaryChange}
        />
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddPanel
