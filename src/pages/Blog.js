import React from 'react'
import BannerSection from '../components/BlogSection/BannerSection'
import PhilosophySection from '../components/BlogSection/PhilosophySection'
import PhotogenicSection from '../components/BlogSection/PhotogenicSection'
import PhotoshootSection from '../components/BlogSection/PhotoshootSection'
import RecentProjectSection from '../components/BlogSection/RecentProjectSection'
import ShootBlogSection from '../components/BlogSection/ShootBlogSection'

const Blog  = () => {
  return (
    <>
      <div className="blog-page">
        <BannerSection />
        <PhotogenicSection />
        <PhotoshootSection />
        <PhilosophySection />
        <RecentProjectSection />
        <ShootBlogSection />
      </div>
    </>
  )
}

export default Blog 