import { Route, Routes } from 'react-router-dom';
import CareersAdmin from './(protected)/pages/classes';
import CoursesAdmin from './(protected)/pages/courses';
import Dashboard from './(protected)/pages/dashboard';
import UserAdmin from './(protected)/pages/users';
import Blog from './pages/blog';
import Class from './pages/class';
import Classdetails from './pages/classdetails';
import Contact from './pages/contact';
import Course from './pages/course';
import Home from './pages/home';
import Studyabroad from './pages/studyabroad';
import ProtectedLayout from './protectedlayout';
import PublicLayout from './publiclayout';

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
        <Route path='/classes/:id'element={<Classdetails/>}/>
      </Route>

      {/* Protected Routes (No Navigation) */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesAdmin />} />
          <Route path="/careers" element={<CareersAdmin/>}/>
          <Route path="/users" element={<UserAdmin/>}/>
        </Route>
    </Routes>
  );
}

export default App;
