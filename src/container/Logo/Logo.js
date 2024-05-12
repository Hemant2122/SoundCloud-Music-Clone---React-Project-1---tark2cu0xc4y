import styles from "./Logo.module.css";
import logoImage from "../../assets/icons/soundcloudlodo.svg"

function Logo() {
  return (
    <div className={styles.Logo}>
        <img className={styles.logoImage} src={logoImage} alt={logoImage} />
        <span className={styles.text}>SOUNDCLOUD</span>
    </div>
  )
}

export default Logo
