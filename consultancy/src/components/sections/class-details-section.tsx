import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

export default function ClassDetailsSection({ classdetails }: { classdetails: any }) {
  return (
    <motion.div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20">
      <div className="w-full">
        <img 
          src={classdetails?.thumbnail} 
          className="w-full object-cover" 
          alt="Course thumbnail" 
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{classdetails?.name}</h1>
          <p className="text-gray-600 text-lg">International English Language Testing System</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="text-primary/80" size={20} />
            <span className="text-gray-700">12 Weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-primary/80" size={20} />
            <span className="text-gray-700">25 Students</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-primary/80" size={20} />
            <span className="text-gray-700">4.8 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="text-primary/80" size={20} />
            <span className="text-gray-700">24 Lessons</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-900">Course Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            {classdetails?.description}
          </p>
        </div>
        <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-900">Why Nepal Education?</h2>
        <p className="text-gray-600 leading-relaxed">
        We cater more than 1000 students of PTE every year.
        Likewise, our students have had satisfactory placements to the best universities.
          </p>
        </div>
        
        
        
        
      </div>
    </motion.div>
  );
}