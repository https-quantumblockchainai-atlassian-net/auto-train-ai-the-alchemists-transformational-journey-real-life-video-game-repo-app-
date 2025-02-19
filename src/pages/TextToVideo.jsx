import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TextToVideo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Text to Video: Cinematic Game Trailers and Movies</h1>
      <p className="text-xl mb-8">Transform your text descriptions into stunning, realistic cinematic game trailers and movies.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-powered video generation from text descriptions</li>
          <li>High-quality, realistic 3D rendering</li>
          <li>Customizable cinematic styles and themes</li>
          <li>Automatic scene composition and camera work</li>
          <li>Integration with game assets and characters</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rapid prototyping of game trailers and cutscenes</li>
          <li>Cost-effective production of marketing materials</li>
          <li>Easy creation of in-game cinematics</li>
          <li>Consistent visual quality across all video content</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Input your text description or script</li>
          <li>Select desired visual style and cinematic preferences</li>
          <li>Choose from a library of pre-built assets or import your own</li>
          <li>Let the AI generate the video sequence</li>
          <li>Fine-tune and edit the result as needed</li>
        </ol>
      </section>

      <div className="space-y-4">
        <Link to="/generate-video">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Generate Video
          </Button>
        </Link>
        <Link to="/video-gallery">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            View Generated Videos
          </Button>
        </Link>
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TextToVideo;
