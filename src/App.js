import Header from './components/Header/Header'
import Search from './components/Search/Search'
import EmpList from './components/EmpList/EmpList'
import data from '../src/data/data'
import './App.css'
import AddPanel from './components/AddPanel/AddPanel'

// const data = [
//   {
//     name: 'Peter',
//     surname: 'Scatch',
//     salary: 2000,
//     increase: true,
//     id: 1,
//   },
//   {
//     name: 'Bi',
//     surname: 'Biilyz',
//     salary: 1400,
//     increase: true,
//     id: 2,
//   },
//   {
//     name: 'Vlud',
//     surname: 'Alabay',
//     salary: 1800,
//     increase: true,
//     id: 3,
//   },
//   {
//     name: 'Vlad',
//     surname: 'Ebalay',
//     salary: 1800,
//     increase: false,
//     id: 4,
//   },
// ]

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <EmpList data={data} />
      <AddPanel />
    </div>
  )
}

export default App
