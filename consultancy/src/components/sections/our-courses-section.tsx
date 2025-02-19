import React from 'react'
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import course1 from '../../assets/images/course1.webp'
import course2 from '../../assets/images/course2.webp'
import course3 from '../../assets/images/course3.jpg'
import course4 from '../../assets/images/courrse4.jpg'
import {motion} from 'framer-motion'
import { FileQuestion, Search, Eye } from "lucide-react";

const slideData = [
  {
    title: "Bachelor In Bio Medical Technology",
    button: "Explore Course",
    src: course1,
  },
  {
    title: "Bachelor In Information Technology",
    button: "Explore Course",
    src: course2,
  },
  {
    title: "Master in Project Management",
    button: "Explore Course",
    src: course3,
  },
  {
    title: "Master in Information Technology",
    button: "Explore Course",
    src: course4,
  },
];



export default function OurCourse() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
    <div className='bg-white py-10'>
      
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl mt-5 md:text-4xl font-bold"
      >
        Discover Our <span className="text-blue-900">Courses</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto flex flex-col md:flex-row items-center justify-center px-12 py-12 space-y-16 md:space-y-0 md:space-x-16"
        >
        {/* Left Text Section (Slightly Smaller) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-[0.9] space-y-6"
        >
          {[
            {
              icon: FileQuestion,
              title: "Why Nepal Education?",
              description:
              "With over 21 years of experience, Nepal Education Consultancy is one of the pioneers of education counselling Nepal.",
            },
            {
              icon: Search,
              title: "Our Vision",
              description:
                "As Nepal’s leading education consultancy, we help students get into top institutions from all corners of the globe.",
              },
              {
              icon: Search,
              title: "Our Vision",
              description:
              "As Nepal’s leading education consultancy, we help students get into top institutions from all corners of the globe.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 bg-primary text-white rounded-xl p-5"
            >
              <div className="mt-1">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Section (Slightly Bigger) */}
        <div className="flex-1 flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[600px] md:max-w-[650px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
              {slideData.map((data, index) => (
                <CarouselItem key={index} className="relative">
                {/* Background Image */}
                <img
                  src={data.src}
                  alt="Product Image"
                  width={900}
                  className="w-full h-[420px] object-cover"
                />
              
                {/* Overlay Content (Text + Button) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
                  <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                  <button className="button">
                    {data.button}
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clip-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                  </button>
                </div>
              </CarouselItem>
              
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>
      </div>
    </>
  );
}

