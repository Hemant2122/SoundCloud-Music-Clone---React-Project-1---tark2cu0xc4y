import React from 'react'
import styles from "./loading.module.css";

function Loading() {
  return (
    <>
        <div>
            <span className={styles.loader}></span>
        </div>
    </>
  )
}

export default Loading