import { Outlet } from "react-router-dom";
import Sidebar from "./(protected)/components/sidebar";
import { useUser, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { LoaderCircleIcon } from "lucide-react";
import { Navigate } from "react-router-dom";

const ProtectedLayout = () => {
  const { user, isLoaded } = useUser();

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If user is not an admin, redirect to home
  if (user && user.publicMetadata?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedLayout;