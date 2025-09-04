import React from 'react'
import HeroSec from '../component/HeroSec'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import NewsLetter from '../component/NewsLetter'
import RecommendedHotels from '../component/RecommendedHotels'


const Homepage = () => {
  return (
    <>
        <HeroSec/>
        <RecommendedHotels/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Homepage