
import React from 'react';
import "../../index.css";
import { createPortal } from 'react-dom';
import styles from "./portals.module.css";
import CreateAccount from '../../container/SingUp/CreateAccount';

export default function Portas({onClose}) {
  return (
    <>
      {
        createPortal(
            <div className={styles.portalModal}>
                <CreateAccount onClose={onClose} />
            </div>, document.getElementById("modal-root")
        )
      }
    </>
  )
}
