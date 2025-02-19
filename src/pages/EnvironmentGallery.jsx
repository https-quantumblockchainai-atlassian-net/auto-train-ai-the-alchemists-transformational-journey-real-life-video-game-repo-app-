import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const EnvironmentGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Environment Gallery</h1>
      <p className="text-xl mb-8">Your generated environments will appear here.</p>
      <Link to="/generate-environment">
        <Button>Generate New Environment</Button>
      </Link>
    </div>
  );
};

export default EnvironmentGallery;
