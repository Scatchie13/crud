import Header from './components/Header/Header'
import Search from './components/Search/Search'
import EmpList from './components/EmpList/EmpList'

import './App.css'
import AddPanel from './components/AddPanel/AddPanel'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <EmpList />
      <AddPanel />
    </div>
  )
}

export default App
