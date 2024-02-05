import React from 'react'
import EtNavbarTopMain from '../common/navbars/EtNavbarTopMain'
import { blogsImg1 } from '../../assets/img/imgAssets'
import EtFooter from './EtFooter'
import { categories, blogsData } from '../../data/blogData'
import EtBlogTabs from '../blogs/EtBlogTabs'


const EtWebBlogsMain = () => {
  return (
    <div className="flex flex-col">
      <EtNavbarTopMain />

      {/* Page Hero */}
      <div
        className="relative h-screen flex items-center justify-center bg-scroll bg-cover bg-blend-screen"
        style={{ backgroundImage: `url(${blogsImg1})` }}
      >
        <div className="bg-black bg-opacity-30 rounded-xl">
          <p className="text-4xl text-white leading-relaxed max-w-md p-4 m-4 text-center">
            We are only as{" "}
            <span className="text-orange-600 font-bold">imaginative</span> as
            the kind of thoughts we nurture inside us!
          </p>
        </div>
      </div>

      {/* Blog Tabs & Tiles */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <EtBlogTabs data={blogsData} categories={categories} />
        </div>
      </div>

      <EtFooter />
    </div>
  )
}

export default EtWebBlogsMain