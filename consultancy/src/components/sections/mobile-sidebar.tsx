import logo from "@/assets/images/1.png";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./social-links";

export default function MobileSidebar() {
  const navigations = [
    {
      name: "Home",
      href: "/home",
    },

    {
      name: "Classes",
      href: "/classes",
   
    },

    {
      name: "Courses",
      href: "/course",
    },

    {
      name: "Contact",
      href: "/contact",
    },

  ];
  return (
    <Sheet>
      <SheetTrigger>
        <Menu
          size={24}
          className="text-white"
        />
      </SheetTrigger>
      <SheetContent className="bg-primary text-white border-l-0">
        <SheetHeader>
          <SheetTitle className=" flex items-center justify-center">
            <Link
              to="/home"
              className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                width={80}
                height={80}
              />
            </Link>
          </SheetTitle>
          <SheetDescription className=" h-full">
            <span className="flex flex-col gap-4 text-base mt-8 text-white opacity-90 ">
              {navigations.map((nav, i) => {
                return (
                  <Link
                    to={nav.href}
                    key={i}>
                      <span>{nav.name}</span>
                    
                  </Link>
                );
              })}
            </span>

            <div className=" flex flex-col gap-2 items-center justify-center mt-8 text-white opacity-80">
              <Link to={"mailto:softy.corporate@gmail.com"}>
                <span className="">nec@gmail.com</span>
              </Link>

              <p className=" text-white-500/80 ">@nec.com.np | 2025</p>
              <div className=" flex items-center gap-1  text-xs">
                <Link
                  to={"tel:+01-5191390"}
                  className="   transition-all ease-in-out duration-300 cursor-pointer">
                  +01-5191390
                </Link>
                |{" "}
                <Link
                  to={"tel:+01-5191390"}
                  className="  cursor-pointer">
                  +01-5191390
                </Link>
                |{" "}
              </div>

              <SocialLinks />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
