import React from 'react'
import BannerSecttion from '../components/PortfolioSection/BannerSecttion'
import PotfolioSection from '../components/PortfolioSection/PotfolioSection'

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-page border-bottom pb-5">
          <BannerSecttion />
          <PotfolioSection />
      </div>
    </>
  )
}

export default Portfolio