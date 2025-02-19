import React from "react";
import aboutimage from "@/assets/images/1.jpeg";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { Button } from "../ui/button";

const words = `21 Years of Excellence in Education Counselling`;

export default function AboutUsSection() {
  return (
    <section id="aboutus" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-center items-start gap-10"
          >
            <div className="flex flex-col justify-start items-start gap-4">
              <h6 className="text-lg font-normal leading-relaxed text-blue-900">
                About Us
              </h6>
              <h2 className="text-primary text-4xl font-bold font-manrope leading-normal">
                Welcome To{" "}
                <span className="text-blue-900">
                  Nepal Education Consultancy
                </span>
              </h2>
              <p className="text-base font-normal leading-relaxed opacity-80">
                Established in 2001, Nepal Education Consultancy is one of the
                pioneers of abroad education counselling in Nepal. We are
                registered under the Ministry of Education, Science & Technology
                and fulfill all of the technical and certification requirements
                along with attaining global certification of training which has
                possessed us with knowledge to lead the counselling industry.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-3.5 rounded-md border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out">
                <h4 className="text-2xl font-bold font-manrope leading-9 opacity-90">
                 21+ Years
                </h4>
                <p className="text-base font-normal leading-relaxed opacity-75">
                  Influencing Digital Landscapes Together
                </p>
              </div>
              <div className="p-3.5 rounded-md border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out">
                <h4 className="text-2xl font-bold font-manrope leading-9 opacity-90">
                  125+ Projects
                </h4>
                <p className="text-base font-normal leading-relaxed opacity-75">
                  Excellence Achieved Through Success
                </p>
              </div>
              <div className="p-3.5 rounded-md border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out">
                <h4 className="text-2xl font-bold font-manrope leading-9 opacity-90">
                  26+ Awards
                </h4>
                <p className="text-base font-normal leading-relaxed opacity-75">
                  Our Dedication to Innovation Wins Understanding
                </p>
              </div>
              <div className="p-3.5 rounded-md border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out">
                <h4 className="text-2xl font-bold font-manrope leading-9 opacity-90">
                  99% Happy Clients
                </h4>
                <p className="text-base font-normal leading-relaxed opacity-75">
                  Mirrors our Focus on Client Satisfaction.
                </p>
              </div>
            </div>
            <button className="button dark">
              Know More{" "}
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </motion.div>
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-full relative">
              <img
                className="rounded-md object-cover w-full  "
                src={aboutimage}
                alt="Achievement"
                width={1000}
                height={1000}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-10 left-0 bg-background text-foreground rounded-lg p-2 shadow-lg"
              >
                <div className="flex gap-x-2 items-end">
                  <Hammer/>
                  <TextGenerateEffect
                    className="text-sm font-medium"
                    words={words}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
