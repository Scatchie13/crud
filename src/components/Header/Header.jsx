import styles from '../Header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.appInfo}>
      <h1>Учет сотрудников в компании ХУЙ</h1>
      <h2>Количество сотрудников:</h2>
      <h2>Премию получат:</h2>
    </div>
  )
}

export default Header
