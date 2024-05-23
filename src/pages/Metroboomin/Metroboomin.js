
import React from 'react'
import mentroboomin_1 from "../../assets/images/metroboomin_1.jpeg";
import mentroboomin_2 from "../../assets/images/mentroboomin_2.jpeg";
import styles from "./Metroboomin.module.css";

function Metroboomin() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img className={styles.mentroboomin_1} src={mentroboomin_1} alt={"mentroboomin_1"} />
        <img className={styles.mentroboomin_2} src={mentroboomin_2} alt={"mentroboomin_2"} />

        <div>
            <h1>Metro Boomin <span>v</span></h1>
            <p>Metro Boomin</p>
            <p>Atlanta, United States</p>
            <h3>NEXT PRO</h3>
        </div>
      </div>
    </div>
  )
}

export default Metroboomin
