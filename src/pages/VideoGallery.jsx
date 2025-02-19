import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const VideoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Video Gallery</h1>
      <p className="text-xl mb-8">Your generated videos will appear here.</p>
      <Link to="/generate-video">
        <Button>Generate New Video</Button>
      </Link>
    </div>
  );
};

export default VideoGallery;
