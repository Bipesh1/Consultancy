import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import Coursescreate from "../components/courses-create";
import { CourseTable } from "../components/courses-table";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any>([]);
    const [isPending,startTransition]= useTransition();
  const fetchCourses = async () => {
    startTransition(async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
      setCourses(response.data); // Update courses state
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  });
  }
  

  useEffect(() => {
    fetchCourses();
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
      <Coursescreate onupdate={fetchCourses} />
      <CourseTable courses={courses} onupdate={fetchCourses} />
    </div>
  );
}
