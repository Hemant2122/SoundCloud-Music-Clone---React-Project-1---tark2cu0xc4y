import React, { useState } from 'react'
import styles from "./SingUp.module.css";
import Portas from '../../components/PortalsModal/Portas';

function SingUp() {

  const [openModel, setOpenModel] = useState(false);


  function openModelAccount(){
    setOpenModel(true);
  }

  function closeModal(){
    setOpenModel(false);
  }

  return (
    <>
      <div>
        <button onClick={openModelAccount} className={styles.SingUp}>Create account</button> 
      </div>

      {
        openModel && <Portas onClose={closeModal} />
      }
    </>
  )
}

export default SingUp
