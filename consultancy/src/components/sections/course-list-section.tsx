import  { useState, useEffect } from 'react';
import { Search, BookOpen, GraduationCap, Filter, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function CoursesList() {
  const [courses, setCourses] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'bachelor' | 'masters'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://consultancy-tan.vercel.app/courses',{
          withCredentials: true
        });
        setCourses(response.data);
      } catch (err) {
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course:any) => {
    const matchesFilter = activeFilter === 'all' || course.academic_requirement === activeFilter;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Our <span className="text-blue-900">Courses</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Discover your perfect educational path with our comprehensive range of bachelor's and master's programs.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === 'all'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Filter className="h-4 w-4" />
              All
            </button>
            <button
              onClick={() => setActiveFilter('bachelor')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === 'bachelor'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Bachelor's
            </button>
            <button
              onClick={() => setActiveFilter('masters')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === 'masters'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Master's
            </button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course:any) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.academic_requirement === 'bachelor'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-800 text-white'
                  }`}>
                    {course.academic_requirement === 'bachelor' ? "Bachelor's" : "Master's"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{course.college}</span>
                  </div>
                </div>
                <Link to={'/classes'}>
                <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Inquiry Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
