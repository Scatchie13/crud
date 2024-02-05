import Filter from '../Filter/Filter'

import styles from '../Search/Search.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
      <Filter />
    </div>
  )
}

export default Search
