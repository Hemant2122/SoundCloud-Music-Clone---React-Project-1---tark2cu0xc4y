import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Portas from '../../components/PortalsModal/Portas';
import SingIn from '../../container/Login/SingIn';

function Login() {

  const [openModel, setOpenModel] = useState(true);
  const [isState, setIsState] = useState(true);

  const navigate = useNavigate();

  function closeModal(){
    setOpenModel(false);
    navigate("/")
  }

  function setIsStateModle() {
    setIsState(false)
  }

  return (
    <>
        {/* <div>
          <button onClick={openModelLogin} className={styles.sign_in}>Sign in</button>
        </div> */}

        {
          openModel && <Portas >
            <SingIn onClose={closeModal} setIsState={setIsStateModle} />
          </Portas>
        }

    </>
  )
}

export default Login
