import { Button } from "@/components/ui/button";
import logo from "@/assets/images/1.png";
import { Book } from "lucide-react";
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function Sidebar() {
  return (
    <div className="md:w-1/6 w-1/2 flex flex-col items-center py-5 space-y-5 px-2 h-screen">
      
      <div className="w-full flex flex-col items-center space-y-3">
        <img src={logo} alt="NEC" width={70} height={70} />
        <p className="text-base text-primary">
          Nepal Education <span className="text-blue-900">Consultancy</span>
        </p>
      </div>

      <NavLink
        to="/courses"
        className=" w-full"
      >
        <Button className="w-full flex bg-transparent hover:text-white text-primary justify-start hover:scale-105 transition-all">
          <Book /> Courses
        </Button>
      </NavLink>
      <NavLink
        to="/careers"
        className="w-full"
      >
        <Button className="w-full bg-transparent text-primary hover:text-white flex justify-start hover:scale-105 transition-all">
          <BookOpen /> Classes
        </Button>
      </NavLink>
      <NavLink
        to="/users"
        className="w-full"
      >
        <Button className="w-full bg-transparent text-primary hover:text-white flex justify-start hover:scale-105 transition-all">
          <BookOpen /> Users
        </Button>
      </NavLink>
      <div className="mt-auto flex items-end flex-1 pb-5">
        <UserButton/>
      </div>
    </div>
  );
}
