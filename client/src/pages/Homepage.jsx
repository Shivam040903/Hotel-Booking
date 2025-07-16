import React from 'react'
import HeroSec from '../component/HeroSec'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import NewsLetter from '../component/NewsLetter'


const Homepage = () => {
  return (
    <>
        <HeroSec/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Homepage