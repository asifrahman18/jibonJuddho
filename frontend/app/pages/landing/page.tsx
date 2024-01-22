import React from 'react'
import HeroSection from './sections/hero/page'
import EmployerSection from './sections/employer/page'
import EmployeeSection from './sections/employee/page'

const Landing = () => {
  return (
    <div>
      <HeroSection/>
      <EmployeeSection/>
      <EmployerSection/>
    </div>
  )
}

export default Landing
