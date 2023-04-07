import React from 'react'
import BannerSection from '../components/VendorSection/BannerSection'
import ClientSection from '../components/VendorSection/ClientSection'
import FormSection from '../components/VendorSection/FormSection'
import ListingSection from '../components/VendorSection/ListingSection'

const Vendor = () => {
  return (
    <>
        {/* <div className="vendorlist-page"> */}
            <BannerSection />
            <ListingSection />
            <ClientSection />
            <FormSection />
        {/* </div> */}
    </>
  )
}

export default Vendor