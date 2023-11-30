import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { whoAreWeImg } from '../../assets/img/imgAssets'


const EtWebAbout = () => {
  return (
    <div className='relative'>
     <EtNavbarTopMain />
     <div className='absolute top-0 left-0 right-0 h-screen bg-cover bg-blend-screen'

      style={{backgroundImage: `url(${whoAreWeImg})` }}
     
     >

     </div>
    </div>
  )
}

export default EtWebAbout