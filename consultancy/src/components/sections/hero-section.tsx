import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Herosection() {
  return (
    <div className="container w-full mx-auto pt-24 pb-24">
      <div className=" flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" relative space-y-8 text-center px-4"
        >
          <h1 className=" text-3xl text-primary md:text-5xl font-bold leading-tight tracking-wide  ">
            Best Education Consultancy
            <br />
            <span className="relative">
              <span className="relative z-10 text-blue-900"> in Nepal </span>
            </span>
            {/* Delivery Service */}
          </h1>

          <p className=" text-lg text-muted-foreground mx-auto md:px-28 md:w-8/12 ">
            As Nepal’s leading education consultancy{" "}
            <span className="text-blue-900">
              we help students get into top institutions from all corners of the
              globe.
            </span>
            .
          </p>

          <div className="flex items-center gap-6 justify-center">
            <Link to="/classes">
              <button className="button dark">
                    Inquiry Now{" "}
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
        </motion.div>
      </div>
    </div>
  );
}
