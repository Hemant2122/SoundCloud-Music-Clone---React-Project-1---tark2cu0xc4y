import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Portas from '../../components/PortalsModal/Portas';
import CreateAccount from '../../container/SingUp/CreateAccount';


function SingUp() {

  const [openModel, setOpenModel] = useState(true);
  const [isState, setIsState] = useState(true);

  const navigate = useNavigate();

  function closeModal(){
    setOpenModel(false);
    navigate("/");
  }

  function setIsStateModle(){
    setIsState(true)
  }

  return (
    <>
      {/* <div>
        <button onClick={openModelAccount} className={styles.SingUp}>Create account</button> 
      </div> */}

      {
        openModel && <Portas >
          <CreateAccount onClose={closeModal} setIsState={setIsStateModle} />
        </Portas>
      }


    </>
  )
}

export default SingUp
