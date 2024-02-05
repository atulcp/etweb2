import React from 'react'

const EtBlogTab = ({ category, isActive, onClick }) => {
  return (
    <div className={`cursor-pointer p-2 w-32 text-center font-oswald  ${isActive ? 'border-b-4 border-orange-500 rounded-t bg-slate-800 text-white text-lg uppercase' : ''}`} onClick={onClick}>
        {category}
    </div>
  )
}

export default EtBlogTab