import React from 'react'
import { etBlessOn3, etBlessOnTxt } from '../../assets/img/imgAssets'
import { useNavigate } from "react-router"

const EtBlessON = () => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/")
    }
    return (
<div className='relative h-screen'>
  <div className='absolute top-0 left-0 right-0 bottom-0 bg-cover bg-blend-screen'
       style={{backgroundImage: `url(${etBlessOn3})` }}>
  </div>
  <div className='absolute inset-x-0' style={{ top: '17%' }}>
    <div className='flex justify-center'>
      <img src={etBlessOnTxt} alt="" onClick={handleButtonClick} className='cursor-pointer' style={{ transform: 'scale(.5)' }}/>
    </div>
  </div>
</div>

      

    )
}

export default EtBlessON
