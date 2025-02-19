import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto py-16 text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Crystallized Quantum Physics</h1>
      <h2 className="text-3xl font-semibold mb-8">Multidimensional Matrix Game Builder</h2>
      <p className="text-xl mb-8">Harness the power of Unreal Engine 5.5 to create mind-bending quantum physics games</p>
      <Link to="/get-started">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Get Started
        </Button>
      </Link>
    </header>
  );
};

export default Header;