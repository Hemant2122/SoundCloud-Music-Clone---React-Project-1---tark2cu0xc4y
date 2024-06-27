import { CgProfile } from "react-icons/cg";
import useUser from "../../CustomHook/useUser";
import styles from "./profile.module.css";
import { useState } from "react";
import Portas from "../../components/PortalsModal/Portas";
import ResetPassword from "../ResetPassword/ResetPassword";

function Profile() {
  const [isProfile, setIsprofile] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { getName } = useUser();

  function closeModal(){
    setOpenModel(false);
  }


  return (
    <>
      <div>
        <div
          onClick={() => {
            setIsprofile(isProfile ? false : true);
          }}
          className={styles.profile_container}
        >
          <div>
            <CgProfile className={styles.profile_icon} />
          </div>
          <div className={styles.user_name}>{getName}</div>
        </div>

        {isProfile && (
          <div className={styles.profile_function}>
            {/* <div className={styles.password_reset}>Profile</div> */}
            <div onClick={() => {
              setOpenModel(true);
              setIsprofile(false);
            }} className={styles.password_reset}>Reset Password</div>
          </div>
        )}

        {
          openModel && <Portas >
            {/* <SingIn onClose={closeModal} setIsState={setIsStateModle} /> */}
            <ResetPassword onClose={closeModal} />
          </Portas>
        }
      </div>
    </>
  );
}

export default Profile;
