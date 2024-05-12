import Header from "../../components/Header/Header"
import styles from "./Home.module.css"

function Home()  {
  return (
    <>
        <div className={styles.homeContainer}>
            <Header />
        </div>
    </>
  )
}

export default Home
