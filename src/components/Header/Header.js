import { NavLink } from "react-router-dom";
import Logo from "../../container/Logo/Logo";
import SearchInput from "../../container/SearchInput/SearchInput";
import styles from "./Header.module.css";
import { HiDotsHorizontal } from "react-icons/hi";
import loginStyles from "../../container/Login/Login.module.css";
import signUpStyles from "../../container/SingUp/SingUp.module.css";
import useUser from "../../CustomHook/useUser";
import Logout from "../../container/Logout/Logout";
import Profile from "../../container/Profile/Profile";

function Header() {

  const { getToken } = useUser();

  return (
    <>
      <nav className={styles.headerContainer}>
        <ul className={styles.logo}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </ul>
        <ul className={styles.headerLink}>
          <li className={styles.link}>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to={"/feed"}>Feed</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to={"/library"}>Library</NavLink>
          </li>
        </ul>
        <ul>
          <SearchInput />
        </ul>
        <ul style={{display: getToken ? "none" : "block"}}>
          <NavLink to={"/login"}><button className={loginStyles.sign_in}>Sign in</button></NavLink>
        </ul>
        <ul style={{display: getToken ? "none" : "block"}}>
          <NavLink to={"/signup"}><button className={signUpStyles.SingUp}>Create account</button> </NavLink>
        </ul>
        <ul style={{display: !getToken ? "none" : "block"}}>
          <NavLink><Profile /></NavLink>
        </ul>
        <ul style={{display: !getToken ? "none" : "block"}}>
          <NavLink><Logout /></NavLink>
        </ul>
        <ul className={styles.upload}>
            <NavLink to={"/upload"} >Upload</NavLink>
        </ul>
        <ul className={styles.pages}>
          <li>
            <NavLink to={"/pages"} ><HiDotsHorizontal /></NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
