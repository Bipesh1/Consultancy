import AboutUsSection from '@/components/sections/about-us'
import AffiliationSection from '@/components/sections/affiliation-section'
import { AnimatedBackground } from '@/components/sections/animated-background'
import { FeaturesSection } from '@/components/sections/features-sections'
import Herosection from '@/components/sections/hero-section'
import OurCourse from '@/components/sections/our-courses-section'
import Sparklefooter from '@/components/sections/sparkle-footer'
import StudyDestination from '@/components/sections/study-destinations'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden ">
    <AnimatedBackground/>
    <Herosection/>
    <AboutUsSection/>
    <FeaturesSection/>
    <OurCourse/>
    <StudyDestination/>
    <AffiliationSection/>
    <TestimonialsSection/>
    
    </div>
  )
}
