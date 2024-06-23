import React, { useState } from 'react'
import styles from "./Login.module.css";
import Portas from '../../components/PortalsModal/Portas';

function Login() {

  const [openModel, setOpenModel] = useState(false);
  const [isState, setIsState] = useState(true);

  function openModelLogin(){
    setOpenModel(true);
    setIsState(true);
  }

  function closeModal(){
    setOpenModel(false);
  }

  function setIsStateModle() {
    setIsState(false)
  }

  return (
    <>
        <div>
          <button onClick={openModelLogin} className={styles.sign_in}>Sign in</button>
        </div>

        {
          openModel && <Portas onClose={closeModal} isState={isState} setIsState={setIsStateModle} />
        }

    </>
  )
}

export default Login
