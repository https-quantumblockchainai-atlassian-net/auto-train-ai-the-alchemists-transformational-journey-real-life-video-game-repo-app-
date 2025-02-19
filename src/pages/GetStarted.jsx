import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Get Started with Quantum Realm Builder</h1>
      <p className="text-xl mb-8">Follow these steps to begin your quantum game development journey:</p>
      <ol className="list-decimal list-inside space-y-4 mb-8">
        <li>Sign up for an account</li>
        <li>Explore our AI design features</li>
        <li>Generate your first quantum environment</li>
        <li>Create a video trailer for your game</li>
      </ol>
      <div className="space-y-4">
        <Link to="/sign-up">
          <Button className="w-full">Sign Up Now</Button>
        </Link>
        <Link to="/ai-design-features">
          <Button className="w-full" variant="outline">Explore AI Features</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
