import useUser from "../../CustomHook/useUser";
import styles from "../Login/Login.module.css";

function Logout() {

    const { logout } = useUser();

  return (
    <>
        <div>
            <button onClick={() => {
                logout();
            }} className={styles.sign_in}>
                Log out
            </button>
        </div>
    </>
  )
}

export default Logout