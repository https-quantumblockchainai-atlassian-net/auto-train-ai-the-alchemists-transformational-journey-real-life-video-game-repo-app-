import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const OptimizedGameElements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generate Optimized Game Elements</h1>
      <p className="text-xl mb-8">AI creates balanced and engaging game objects, characters, and items.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">Our AI-powered system analyzes vast amounts of game data and player feedback to create optimized game elements that enhance gameplay experience. Here's what you can expect:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Balanced character attributes and abilities</li>
          <li>Engaging item properties and rarity distributions</li>
          <li>Dynamic object interactions that create emergent gameplay</li>
          <li>Adaptive difficulty curves for NPCs and enemies</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reduce development time and costs</li>
          <li>Create more diverse and interesting game worlds</li>
          <li>Improve player engagement and retention</li>
          <li>Easily iterate and refine game elements based on AI suggestions</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">To begin generating optimized game elements:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Define your game's genre and target audience</li>
          <li>Input basic parameters for the elements you want to create</li>
          <li>Let our AI analyze and generate optimized suggestions</li>
          <li>Review and refine the generated elements as needed</li>
        </ol>
      </section>

      <div className="space-y-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Start Generation
        </Button>
        <Link to="/">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OptimizedGameElements;
