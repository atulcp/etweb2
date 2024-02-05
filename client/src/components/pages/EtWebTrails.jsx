import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { trailsImg1 } from '../../assets/img/imgAssets'
import EtFooter from './EtFooter'
import EtTrailTabs from '../trails/EtTrailTabs'
import { trailCategories, trailsData } from '../../data/trailData'

const EtWebTrails = () => {
  return (
    <div className="flex flex-col">
    
     <EtNavbarTopMain />
     <div className="relative h-screen flex items-center justify-center bg-scroll bg-cover bg-blend-screen"
        style={{ backgroundImage: `url(${trailsImg1})` }}>

        <div className="bg-slate-900 bg-opacity-30 rounded-xl">
          <p className="text-4xl text-gray-300 leading-relaxed max-w-md p-4 m-4 text-center">
            A journey of{" "}
            <span className="text-orange-600 font-bold">limitless</span> possibilities begins by taking the first step!
          </p>
        </div>
      
      </div>



      {/* Trail Tabs & Tiles */}
      <div className="flex justify-center bg-gradient-to-r from-black via-gray-800 to-black">
        <div className="w-full max-w-6xl mx-auto">
        <EtTrailTabs data={trailsData} categories={trailCategories} />
        </div>
      </div>

      <EtFooter />
    </div>
  )
}

export default EtWebTrails