import React from 'react'

const EtTrailCard = ({ trail }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-800 z-30 border border-black">
        <img src={trail.image} alt={trail.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-200">{trail.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{trail.narrative}</p>
          <div className="text-gray-700 text-xs">{trail.mode} - {trail.duration}</div>
          <div className="flex justify-between items-center text-gray-700 text-xs mt-2">
            <span>Views: {trail.stats.views}</span>
            <span>Likes: {trail.stats.likes}</span>
            <span>Comments: {trail.stats.comments}</span>
          </div>
        </div>
      </div>
  )
}

export default EtTrailCard