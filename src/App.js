import { useState } from 'react'
import uniqid from 'uniqid'

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import EmpList from './components/EmpList/EmpList'
import data from '../src/data/data'
import './App.css'
import AddPanel from './components/AddPanel/AddPanel'

function App() {
  const [dat, setDat] = useState(data)
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')

  const onValueChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const onSalaryChange = (e) => {
    e.preventDefault()
    setSalary(e.target.value)
  }

  const onDelete = (id) => {
    setDat(dat.filter((i) => i.id !== id))
  }

  const addUser = (e) => {
    e.preventDefault()
    const newUser = {
      name: name,
      salary: salary,
      id: uniqid(),
    }
    console.log(newUser)
    setDat([...dat, newUser])
  }

  return (
    <div className="App">
      <Header />
      <Search />
      <EmpList onDelete={onDelete} data={dat} />
      <AddPanel
        addUser={addUser}
        name={name}
        salary={salary}
        onValueChange={onValueChange}
        onSalaryChange={onSalaryChange}
      />
    </div>
  )
}

export default App
