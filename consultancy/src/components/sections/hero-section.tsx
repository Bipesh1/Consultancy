import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../button";

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
             <Button title="Inquiry Now"/>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
