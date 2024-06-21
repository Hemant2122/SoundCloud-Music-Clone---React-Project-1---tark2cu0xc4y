
import React from 'react'
import mentroboomin_1 from "../../assets/images/metroboomin_1.jpeg";
import mentroboomin_2 from "../../assets/images/mentroboomin_2.jpeg";
import styles from "./Metroboomin.module.css";
import checkSVG from "../../assets/icons/check-mark.svg";
import starCircle from "../../assets/icons/star-circle.svg";

function Metroboomin() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img className={styles.mentroboomin_1} src={mentroboomin_1} alt={"mentroboomin_1"} />
        <img className={styles.mentroboomin_2} src={mentroboomin_2} alt={"mentroboomin_2"} />

        <div className={styles.mentroboominMessage}>
            <h1 id={styles.MetroboominH1}>
              Metro Boomin 
              <span>
                <img className={styles.checkicon} src={checkSVG} alt='Check_Image' />
              </span>
            </h1>
            <p className={styles.MetroboominStates}>Metro Boomin</p>
            <p className={styles.MetroboominStates}>Atlanta, United States</p>
            <h3 id={styles.nextPro}>
              <span>
                <img className={styles.starCircle} src={starCircle} alt='starCircle_Image' />
              </span>
              NEXT PRO
            </h3>
        </div>
      </div>
    </div>
  )
}

export default Metroboomin
