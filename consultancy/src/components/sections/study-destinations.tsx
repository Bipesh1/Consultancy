import destination1 from "@/assets/images/destination1.webp";
import destination2 from "@/assets/images/destination2.webp";
import destination3 from "@/assets/images/destination3.jpg";
import destination4 from "@/assets/images/destination4.jpeg";
import { motion } from "framer-motion";
import { LayoutGrid } from "../ui/layout-grid";


export default function StudyDestination() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto h-screen py-20 "
    >
    
      <div className="container flex flex-col mx-auto px-4 gap-3">
        <h2 className="text-primary text-center text-2xl md:text-4xl font-bold font-manrope leading-normal">
          Select Your Dream <span className="text-blue-900">Destinations</span>{" "}
        </h2>
        <p className="text-primary text-base md:text-lg text-center font-manrope">
          Studying at world-class colleges and universities is now easier!
        </p>
      </div>
      <LayoutGrid cards={cards} />
    </motion.div>
      </>
  );
}

const SkeletonOne = () => {
    return (
        <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Canada
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Study in Canada and experience a world-class education system, vibrant
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
    return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        USA
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Study in the USA and experience a world-class education system, vibrant
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Australia
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Study in Australia and experience a world-class education system, vibrant
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Newzealand
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Study in Newzealand and experience a world-class education system, vibrant
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: destination1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: destination2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: destination3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: destination4,
  },
];
