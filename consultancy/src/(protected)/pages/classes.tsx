import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import Classcreate from "../components/class-create";
import { ClassTable } from "../components/class-table";
import { SignedOut } from "@clerk/clerk-react";

export default function ClassAdmin() {
  const [classes, setClasses] = useState<any>([]);
  const [isPending,startTransition]= useTransition();
  const fetchClasses = async () => {
    startTransition(async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
        setClasses(response.data); // Update courses state
      } catch (err) {
        console.error("Failed to fetch classes:", err);
      }
    })
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }
  return (
    <div className="md:px-5">
      <SignedOut/>
       <Classcreate onupdate={fetchClasses} />
      <ClassTable classes={classes} onupdate={fetchClasses} />
    </div>
  );
}
