import axios from "axios";
import { ChevronRight } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AllClass() {

  const [classes,setClasses]= useState<any>([])
  const [isPending,startTransition]= useTransition()
  useEffect(()=>{
      startTransition(async()=>{
        const response= await axios.get(`${import.meta.env.VITE_API_URL}/classes`)
        console.log(response)
        setClasses(response.data)
      })
  },[])
  
   if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }
  return (
    <>
      <div className="space-y-4 py-10">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="container text-center text-3xl mt-5 md:text-4xl font-bold"
        >
          All<span className="text-blue-900"> Classes</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-base md:text-lg text-center font-manrope"
        >
          Find out how they enjoy their student life to the fullest across the
          globe, what they have got to share with us.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-12 "
      >
         {classes.map((cl:any)=>(
           <div key={cl._id} className=" w-[90%] h-[480px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0  overflow-hidden rounded-md dark:text-white text-primary ">
           <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
             <div
               style={{
                 background:
                   "linear-gradient(123.9deg, #000000 1.52%, rgba(0, 0, 0, 0) 68.91%)",
               }}
               className="absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300"
             ></div>
             <img
               src={cl.thumbnail}
               alt="shoes"
               width={600}
               height={600}
               className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
             />
           </figure>
           <article className="  p-4 space-y-2">
             <h1 className="text-xl font-semibold capitalize">
               {cl.name}
             </h1>
             <Link
               to={`/classes/${cl._id}`}
               className=" text-base dark:text-white text-blue-900 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
             >
               Learn about {cl.name}
               <span>
                 <ChevronRight />
               </span>
             </Link>
           </article>
         </div>
        ))}
        
        
      </motion.div>
    </>
  );
}

export default AllClass;
