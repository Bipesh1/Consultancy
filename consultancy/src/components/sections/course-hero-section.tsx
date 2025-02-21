import abroad from "@/assets/images/abroad1.jpg"
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import {motion} from "framer-motion"

export default function CourseHeroSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-12 py-16 px-5 md:px-12 relative">
      {/* Background Decoration */}
      <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30" />

      {/* Left Side - Text Content */}
      <div className="space-y-6 text-center md:text-left">
        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-900 font-medium text-sm mb-4">
          Discover Your Path
        </div>
        <h2 className="text-4xl text-primary md:text-5xl font-bold leading-tight">
          Choose a course to find your{' '}
          <span className="text-blue-900 relative">
            future update
          
          </span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi inventore labore natus illo beatae enim accusamus,
          cumque aspernatur vitae minima.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <Link to="courses-section">
              <button className="button dark">
                    Explore Courses
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clip-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative mt-10 md:mt-0"> 
        <img 
          src={abroad}
          alt="Study Abroad" 
          className="relative w-full h-[500px] object-cover rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
        />
        {/* Stats overlay */}
        <div className="absolute -bottom-6 left-6 right-6 bg-white p-4 rounded-lg shadow-lg flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-900">50+</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-900">1000+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-900">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}