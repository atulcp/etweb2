import React, { useState } from 'react'
import EtBlogTab from './EtBlogTab'
import EtBlogCard from './EtBlogCard'
import { categories } from '../../data/blogData' 


const EtBlogTabs = ( { data }) => {
    const [activeTab, setActiveTab] = useState('All')

    const filteredData = activeTab === 'All' ? data : data.filter(blog => blog.category === activeTab)
  
    return (
      <div className="py-4">
        <div className="flex space-x-4 border-b py-1">
          {categories.map(category => (
            <EtBlogTab key={category} category={category} isActive={activeTab === category} onClick={() => setActiveTab(category)} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filteredData.map(blog => (
            <EtBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    )
}

export default EtBlogTabs