import React, { useEffect, useState } from "react";
import { CourseTable } from "../components/courses-table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import Classcreate from "../components/class-create";
import { ClassTable } from "../components/class-table";

export default function ClassAdmin() {
  const [classes, setClasses] = useState<any>([]);
  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:3001/classes", {
        withCredentials: true,
      });
      setClasses(response.data); // Update courses state
    } catch (err) {
      console.error("Failed to fetch classes:", err);
    }
  };
  useEffect(() => {
    fetchClasses();
  }, []);
  return (
    <div className="md:px-5">
       <Classcreate onupdate={fetchClasses} />
      <ClassTable classes={classes} onupdate={fetchClasses} />
    </div>
  );
}
