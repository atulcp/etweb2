import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { blogsImg1 } from '../../assets/img/imgAssets'


const EtWebBlogsMain = () => {
  return (
    <div className='relative'>
     <EtNavbarTopMain />
     <div className='absolute top-0 left-0 right-0 h-screen bg-cover bg-blend-screen'

      style={{backgroundImage: `url(${blogsImg1})` }}
     
     >

     </div>
    </div>
  )
}

export default EtWebBlogsMain