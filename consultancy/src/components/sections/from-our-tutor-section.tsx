import { UserCircle2 } from "lucide-react";

export default function FromOurTutorSection({ classdetails }: { classdetails: any }) {
  return (
    <div className="py-10 mt-10">
      <div className="container mx-auto">
        <h2 className='text-center md:text-3xl font-bold text-primary'>Hear From <span className='text-blue-900'>Our Tutor</span></h2>
        <div className="relative py-10">
          {/* Decorative quote icon */}
          
          
          <div className="relative z-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Tutor's Image */}

                {/* Message Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-center space-x-3">
                      <UserCircle2 className="text-primary animate-pulse" size={24} />
                      <h2 className="text-sm font-semibold text-primary tracking-wider uppercase">
                        Message From Your {classdetails?.name} Expert
                      </h2>
                    </div>

                    {/* Message body */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Welcome to our {classdetails?.name} preparation journey! With over a decade of experience
                        in  training, I understand the challenges and aspirations of test-takers.
                        Our comprehensive program is designed to not just teach the test format,
                        but to build your confidence and English proficiency.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        Whether you're aiming for academic or general training, we focus on 
                        personalized strategies that address your specific needs. Our proven
                        methodology has helped thousands of students achieve their target
                        band scores and pursue their international dreams.
                      </p>
                    </div>

                    {/* Tutor details */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <UserCircle2 className="text-primary" size={32} />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xl font-bold text-gray-900">{classdetails?.tutor}</span>
                          <span className="text-sm text-gray-600">Lead {classdetails?.name} Instructor</span>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-sm text-primary">{classdetails?.name} Certified Trainer</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-600">10+ Years Experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 relative overflow-hidden h-[400px]">
                  <img
                    src={classdetails?.tutorthumbnail}
                    alt="IELTS Tutor"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}