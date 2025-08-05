import React from 'react'
import Footer from '../components/Footer'
import DomesticForm from '../forms/DomesticForm'
import Navbar from '../components/Navbar'

import InternationalPackageCards from '../components/Packages/InternationPackageCards'
const International = () => {
  return (
    <div>
     <Navbar/>
     <InternationalPackageCards/>
     <DomesticForm/>
     <Footer/>
    </div>
  )
}

export default International
  
