import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogsData } from '../../data/blogData' 
import EtNavbarTopBlogDetail from '../common/navbars/EtNavbarTopBlogDetail'


const EtBlogDetailPage = () => {
    let { category, titleSlug } = useParams()
    titleSlug = decodeURIComponent(titleSlug)
    const blog = blogsData.find(blog => blog.title.toLowerCase().replace(/\s+/g, '-') === titleSlug)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="flex flex-col items-center">
            <EtNavbarTopBlogDetail />
            <div className="relative w-full">
                <img src={blog.image} alt={blog.title} className="w-full object-cover" style={{ maxHeight: '100vh', objectPosition: 'top' }}/>
                <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full">
                    <div className='text-center'>
                      <h1 className="text-3xl font-bold text-white font-oswald">{blog.title}</h1>
                      <p className="text-sm text-gray-200">{`${blog.author} in ${category} - ${blog.date}`}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl w-full">
                <div className="mt-4">
                    <p className='font-poppins font-extralight text-xl leading-relaxed'>{blog.narrative}</p>
                </div>
                <div className="mt-4 mb-5 py-2">
                    <p className='font-poppins text-xs text-blue-700'>Views: {blog.stats.views}, Likes: {blog.stats.likes}, Comments: {blog.stats.comments}</p>
                    {/* Placeholder for Like and Comment functionality */}
                </div>
            </div>
        </div>
  )
}

export default EtBlogDetailPage