import { NavLink } from "react-router-dom";
import Logo from "../../container/Logo/Logo";
import SearchInput from "../../container/SearchInput/SearchInput";
import styles from "./Header.module.css";
import Login from "../../container/Login/Login";
import SingUp from "../../container/SingUp/SingUp";

function Header() {
  return (
    <>
      <nav className={styles.headerContainer}>
        <ul className={styles.logo}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </ul>
        <ul className={styles.headerLink}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/feed"}>Feed</NavLink>
          </li>
          <li>
            <NavLink to={"/library"}>Library</NavLink>
          </li>
        </ul>
        <ul>
          <SearchInput />
        </ul>
        <ul>
          <Login />
        </ul>
        <ul>
          <SingUp />
        </ul>
        <ul className={styles.upload}>
            <NavLink to={"/upload"} >Upload</NavLink>
        </ul>
        <ul className={styles.pages}>
          <li>
            <NavLink to={"/pages"} >...</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
