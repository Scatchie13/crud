import EmpListItems from '../EmpListItems/EmpListItems'
import './EmpList.css'

const EmpList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((el, id) => (
        <EmpListItems
          name={el.name}
          surname={el.surname}
          salary={el.salary}
          key={id}
          increase={el.increase}
        />
      ))}
    </ul>
  )
}

export default EmpList
