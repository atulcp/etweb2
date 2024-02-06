import React, { useState } from 'react'
import EtTrailCard from './EtTrailCard'
import EtTrailTab from './EtTrailTab'
import { trailCategories } from '../../data/trailData'

const EtTrailTabs = ({ data }) => {

    const [activeTab, setActiveTab] = useState('All')

    const filteredData = activeTab === 'All' ? data : data.filter(trail => trail.category === activeTab)


  return (
    <div className="py-4">
        <div className="flex space-x-4 border-b py-1 w-[90%] mx-auto">
          {trailCategories.map(category => (
            <EtTrailTab key={category} category={category} isActive={activeTab === category} onClick={() => setActiveTab(category)} />
          ))}
        </div>
        <div className="grid w-[90%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mx-auto">
          {filteredData.map(trail => (
            <EtTrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      </div>
  )
}

export default EtTrailTabs