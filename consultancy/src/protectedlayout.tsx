import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./(protected)/components/sidebar";

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