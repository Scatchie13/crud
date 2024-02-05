import EmpListItems from '../EmpListItems/EmpListItems'
import './EmpList.css'

const EmpList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((el) => (
        <EmpListItems {...el} />
      ))}
    </ul>
  )
}

export default EmpList
