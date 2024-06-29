import React, { useState } from 'react';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

function Upload() {

  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <>
      <div>
        <h1 onClick={() => {
          setIsDisplay(true);
          setTimeout(() => {
            setIsDisplay(false);
          }, 1000);
        }}>Upload</h1>

        {
          isDisplay && <div className='coming_soon'>
            <ComingSoon />
          </div>
        }
      </div>
    </>
  )
}

export default Upload
