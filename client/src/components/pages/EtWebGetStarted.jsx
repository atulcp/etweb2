import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { getStartedImg1 } from '../../assets/img/imgAssets'

const EtWebGetStarted = () => {
  return (
    <div className='relative'>
     <EtNavbarTopMain />
     <div className='absolute top-0 left-0 right-0 h-screen bg-cover bg-blend-screen'

      style={{backgroundImage: `url(${getStartedImg1})` }}
     
     >

     </div>
    </div>
  )
}

export default EtWebGetStarted