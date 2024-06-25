
import React, { useState } from 'react';
import "../../index.css";
import { createPortal } from 'react-dom';
import styles from "./portals.module.css";
import CreateAccount from '../../container/SingUp/CreateAccount';
import SingIn from '../../container/Login/SingIn';



export default function Portas({children}) {

  return (
    <>
      {
        createPortal(
            <div className={styles.portalModal}>
              {children}
            </div>, document.getElementById("modal-root")
        )
      }
    </>
  )
}
