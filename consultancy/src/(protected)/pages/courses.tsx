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
import Coursescreate from "../components/courses-create";
import axios from "axios";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any>([]);
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3001/courses", {
        withCredentials: true,
      });
      setCourses(response.data); // Update courses state
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="md:px-5">
      <Coursescreate onupdate={fetchCourses} />
      <CourseTable courses={courses} />
    </div>
  );
}
