import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Forum = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Developers Forum</h1>
      <p className="text-xl mb-8">Connect with other quantum game developers, share ideas, and get help.</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quantum puzzle design strategies</li>
          <li>Optimizing multiversal simulations</li>
          <li>AI integration in quantum narratives</li>
          <li>Balancing gameplay across dimensions</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">Start a New Discussion</Button>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Browse All Topics</Button>
      </div>
      
      <div className="space-y-4">
        <Link to="/sign-up">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Sign Up to Participate</Button>
        </Link>
        <Link to="/">
          <Button className="w-full" variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Forum;