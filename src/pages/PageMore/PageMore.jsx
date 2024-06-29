import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import ComingSoon from '../../components/ComingSoon/ComingSoon';

function PageMore() {

  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <>
      <div>
          <div onClick={() => {
            setIsDisplay(true);
            setTimeout(() => {
              setIsDisplay(false);
            }, 1000);
          }}>
            <HiDotsHorizontal id='dots' />
          </div>

          {
            isDisplay && <div className='coming_soon'>
              <ComingSoon />
            </div>
          }
      </div>
    </>
  )
}

export default PageMore
