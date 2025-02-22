import { AnimatedBackground } from '@/components/sections/animated-background'
import Courseherosection from '@/components/sections/course-hero-section'
import CoursesList from '@/components/sections/course-list-section'

export default function Course() {
  return (
    <div className='overflow-x-hidden'>
      <AnimatedBackground/>
      <Courseherosection/>
      <CoursesList/>

    </div>
  )
}
