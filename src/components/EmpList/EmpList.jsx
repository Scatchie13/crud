import EmpListItems from '../EmpListItems/EmpListItems'
import './EmpList.css'

const EmpList = () => {
  return (
    <ul className="app-list list-group">
      <EmpListItems />
      <EmpListItems />
      <EmpListItems />
    </ul>
  )
}

export default EmpList
