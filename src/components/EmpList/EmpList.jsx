import EmpListItems from '../EmpListItems/EmpListItems'
import './EmpList.css'

const EmpList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((el) => (
        <EmpListItems
          name={el.name}
          surname={el.surname}
          salary={el.salary}
          key={el.id}
        />
      ))}
    </ul>
  )
}

export default EmpList
