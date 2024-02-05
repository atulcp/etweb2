import React from 'react'
import { useParams } from 'react-router-dom'
import { blogsData } from '../../data/blogData' 

const EtBlogDetailPage = () => {
    let { category, titleSlug } = useParams()
    titleSlug = decodeURIComponent(titleSlug)
  const blog = blogsData.find(blog => blog.title.toLowerCase().replace(/\s+/g, '-') === titleSlug)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="flex flex-col items-center">
      <img src={blog.image} alt={blog.title} className="w-full h-1/2 object-contain"/>
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
        <p className="text-sm text-gray-500">{`${blog.author} in ${category} - ${blog.date}`}</p>
        <div className="mt-4">
          {blog.narrative}
        </div>
        <div className="mt-4">
          Views: {blog.stats.views}, Likes: {blog.stats.likes}, Comments: {blog.stats.comments}
          {/* Placeholder for Like and Comment functionality */}
        </div>
      </div>
    </div>
  )
}

export default EtBlogDetailPage