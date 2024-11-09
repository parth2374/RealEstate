import React from 'react'
import AboutScrollImage from '../components/About/AboutScrollImage'
import Profile from '../components/About/Profile/Profile'
import Testimonials from '../components/About/Testimonials/Testimonials'
import TestimonialScroll from '../components/About/Testimonials/TestimonialScroll'

const About = () => {
  return (
    <div>
      <AboutScrollImage />
      <div className='-mt-80'><Profile /></div>
      <TestimonialScroll />
      <Testimonials />
    </div>
  )
}

export default About
