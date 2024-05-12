import Logo from "../../container/Logo/Logo";
import SearchInput from "../../container/SearchInput/SearchInput";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div>
            <SearchInput />
        </div>
    </div>
  );
}

export default Header;
