import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Quantum Realm Builder Demo</h1>
      <p className="text-xl mb-8">Experience the power of quantum game development with our interactive demo.</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Demo Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Create a simple quantum puzzle</li>
          <li>Generate a procedural quantum environment</li>
          <li>Experience adaptive difficulty balancing</li>
          <li>Interact with AI-generated characters</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">Start Interactive Demo</Button>
        <p className="text-sm text-gray-400">Note: This is a limited demo. For full access to all features, please sign up for an account.</p>
      </div>
      
      <div className="space-y-4">
        <Link to="/sign-up">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Sign Up for Full Access</Button>
        </Link>
        <Link to="/">
          <Button className="w-full" variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Demo;