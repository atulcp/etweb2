import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { whoAreWeImg } from '../../assets/img/imgAssets'
import { aboutNavItems } from '../../data/navMenuMainItems'


const EtWebAbout = () => {
  return (
    <div className='relative'>
     <EtNavbarTopMain />
     <div className='absolute top-0 left-0 right-0 h-screen bg-cover bg-blend-screen'

      style={{backgroundImage: `url(${whoAreWeImg})` }}
     > 
      <div className='flex flex-col justify-center h-full absolute left-20'>
        {aboutNavItems.map((item, index) => (
          <p key={index} 
          className='m-3 py-1 px-5 
          cursor-pointer 
          text-center text-orange-600 
          hover:rounded-full 
          hover:bg-orange-600 
          hover:text-white
          hover:shadow-lg hover:shadow-slate-400'>{item.item}</p>
        ))}
      </div>
     
     </div>
     
    </div>
  )
}

export default EtWebAbout