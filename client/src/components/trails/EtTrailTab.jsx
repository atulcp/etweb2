import React from 'react'

const EtTrailTab = ({ category, isActive, onClick }) => {
  return (
    <div className={`cursor-pointer p-2 w-32 text-center font-oswald  ${isActive ? 'border-b-4 border-orange-500 rounded-t bg-slate-800 text-white' : 'text-gray-400'}`} onClick={onClick}>
        {category}
    </div>
  )
}

export default EtTrailTab