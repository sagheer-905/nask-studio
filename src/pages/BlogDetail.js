import React from 'react'
import Banner from '../components/BlogDetailSection/Banner'
import ContentSection from '../components/BlogDetailSection/ContentSection'

const BlogDetail = () => {
  return (
    <>
        <div className="blog-detail-page border-bottom pb-5">
            <Banner />
            <ContentSection />
        </div>
    </>
  )
}

export default BlogDetail