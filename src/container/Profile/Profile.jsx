import { CgProfile } from "react-icons/cg";
import useUser from "../../CustomHook/useUser";
import styles from "./profile.module.css";
import { useState } from "react";

function Profile() {
  const [isProfile, setIsprofile] = useState(false);

  const { getName } = useUser();

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
            <div className={styles.password_reset}>Reset Password</div>
          </div>
        )}

        
      </div>
    </>
  );
}

export default Profile;
