
import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/images/1.png";
import SocialLinks from "./social-links";
import MobileSidebar from "./mobile-sidebar";

export default function Navigation() {
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-primary backdrop-blur-md z-50 py-2 md:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" height={80} width={80} />
          </Link>

          

          <div className="hidden md:flex items-center space-x-8">
            <button>
              <Link
                to="/studyabroad"
                className="text-white/90 hover:text-white transition-colors" 
              >
                Study Abroad
              </Link>
            </button>

            <button>
              <Link
                to="/classes"
                className="text-white/90 hover:text-white transition-colors" 
              >
                Classes
              </Link>
            </button>

            <button>
              <Link
                to="/course"
                className="text-white/90 hover:text-white transition-colors" 
              >
                Courses
              </Link>
            </button>

            <button>
              <Link
                to="/blog"
                className="text-white/90 hover:text-white transition-colors" 
              >
                Blog
              </Link>
            </button>

            <button>
              <Link
                to="/contact"
                className="text-white/90 hover:text-white transition-colors" 
              >
                Contact
              </Link>
            </button>
          </div>

          <div className="block md:hidden">
            <MobileSidebar />
          </div>

          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}