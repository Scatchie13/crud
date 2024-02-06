import './AddPanel.css'

const AddPanel = ({ addUser, onSalaryChange, onValueChange, name, salary }) => {
  return (
    <div className="app-add-form">
      <h3>Add new employees</h3>
      <form onSubmit={addUser} className="add-form d-flex">
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
