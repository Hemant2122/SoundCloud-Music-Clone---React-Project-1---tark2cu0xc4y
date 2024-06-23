
import React, { useState } from 'react';
import "../../index.css";
import { createPortal } from 'react-dom';
import styles from "./portals.module.css";
import CreateAccount from '../../container/SingUp/CreateAccount';
import SingIn from '../../container/Login/SingIn';


export default function Portas({onClose, setIsState, isState}) {

  // const [isStateToggle, setIsStateToggle] = useState(false);

  return (
    <>
      {
        createPortal(
            <div className={styles.portalModal}>
              {isState && <SingIn onClose={onClose} setIsState={setIsState} />}
              {!isState && <CreateAccount onClose={onClose} setIsState={setIsState} />}
            </div>, document.getElementById("modal-root")
        )
      }
    </>
  )
}
