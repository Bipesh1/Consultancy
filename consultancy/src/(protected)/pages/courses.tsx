import axios from "axios";
import { useEffect, useState } from "react";
import Coursescreate from "../components/courses-create";
import { CourseTable } from "../components/courses-table";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any>([]);
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses`, {
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
      <CourseTable courses={courses} onupdate={fetchCourses} />
    </div>
  );
}
