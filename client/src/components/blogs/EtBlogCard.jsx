import React from 'react'
import { Link } from 'react-router-dom'

const EtBlogCard = ( { blog }) => {

    // const titleSlug = blog.title.toLowerCase().replace(/\s+/g, '-')
    const titleSlug = encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, '-'))
    
  return (
    <Link to={`/blogs/${blog.category}/${titleSlug}`} className="no-underline text-black">
      <div className="rounded-lg overflow-hidden shadow-lg shadow-black z-30">
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{blog.narrative}</p>
          <div className="text-gray-700 text-xs">{blog.author} - {blog.date}</div>
          <div className="flex justify-between items-center text-gray-700 text-xs mt-2">
            <span>Views: {blog.stats.views}</span>
            <span>Likes: {blog.stats.likes}</span>
            <span>Comments: {blog.stats.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EtBlogCard