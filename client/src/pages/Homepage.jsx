import React from 'react'
import HeroSec from '../component/HeroSec'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'


const Homepage = () => {
  return (
    <>
        <HeroSec/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
    </>
  )
}

export default Homepage