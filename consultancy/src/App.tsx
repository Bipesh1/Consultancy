import { Routes, Route } from 'react-router-dom';
import Navigation from './components/sections/navigation';
import Studyabroad from './pages/studyabroad';
import Home from './pages/home';
import Contact from './pages/contact';
import Class from './pages/class';
import Course from './pages/course';
import Blog from './pages/blog';
import Dashboard from './(protected)/pages/dashboard';
import CoursesAdmin from './(protected)/pages/courses';
import PublicLayout from './publiclayout';
import ProtectedLayout from './protectedlayout';
import CareersAdmin from './(protected)/pages/classes';

function App() {
  return (
    <Routes>
      {/* Public Routes (With Navigation) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/studyabroad" element={<Studyabroad />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Class />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      {/* Protected Routes (No Navigation) */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesAdmin />} />
          <Route path="/careers" element={<CareersAdmin/>}/>
        </Route>
    </Routes>
  );
}

export default App;
