import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DomesticPackageCards from '../components/Packages/DomesticPackageCards'

const Domestic = () => {
  return (
    <div>
      <Navbar/>
      <DomesticPackageCards/>
      
      <Footer/>
    </div>
  )
}

export default Domestic