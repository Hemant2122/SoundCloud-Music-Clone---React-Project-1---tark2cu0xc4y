import styles from "./comingSoon.module.css";

function ComingSoon() {
  return (
    <>
        <div className={styles.coming_soon_container}>
            <div className={[`${styles.box} ${styles.box1}`]}></div>
            <div className={styles.coming_soon}>
                <div className={[`${styles.box} ${styles.box1}`]}></div>
                coming soon
            </div>
            {/* <div className={[`${styles.box} ${styles.box2}`]}></div> */}
        </div>
    </>
  )
}

export default ComingSoon