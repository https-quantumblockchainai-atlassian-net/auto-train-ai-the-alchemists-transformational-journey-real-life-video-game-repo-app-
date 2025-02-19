import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Quantum Realm Builder</Link>
          <div className="space-x-4">
            <Button asChild variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/research-dashboard">Research Dashboard</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <footer className="container mx-auto py-8 text-center text-gray-400">
        <p>&copy; 2024 Quantum Realm Game Builder Kit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;