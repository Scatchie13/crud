import { useState } from 'react'

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import EmpList from './components/EmpList/EmpList'
import data from '../src/data/data'
import './App.css'
import AddPanel from './components/AddPanel/AddPanel'

function App() {
  const [dat, setDat] = useState(data)

  const onDelete = (id) => {
    setDat(dat.filter((i) => i.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Search />
      <EmpList onDelete={onDelete} data={dat} />
      <AddPanel />
    </div>
  )
}

export default App
