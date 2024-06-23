import React, { useState } from 'react'
import styles from "./SingUp.module.css";
import Portas from '../../components/PortalsModal/Portas';

function SingUp() {

  const [openModel, setOpenModel] = useState(false);
  const [isState, setIsState] = useState(true);

  function openModelAccount(){
    setOpenModel(true);
    setIsState(false);
    
  }

  function closeModal(){
    setOpenModel(false);
  }

  function setIsStateModle(){
    setIsState(true)
  }

  return (
    <>
      <div>
        <button onClick={openModelAccount} className={styles.SingUp}>Create account</button> 
      </div>

      {
        openModel && <Portas onClose={closeModal} isState={isState} setIsState={setIsStateModle} />
      }
    </>
  )
}

export default SingUp
