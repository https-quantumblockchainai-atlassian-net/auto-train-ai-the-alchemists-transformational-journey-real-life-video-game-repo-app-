import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const DifficultyBalancing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Balance Game Difficulty Using Machine Learning</h1>
      <p className="text-xl mb-8">Dynamically adjust challenge levels based on player performance and preferences.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">Our machine learning algorithms analyze player data to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Identify player skill levels and learning curves</li>
          <li>Adjust enemy AI behavior and stats in real-time</li>
          <li>Modify puzzle complexity based on solving times</li>
          <li>Adapt resource availability to maintain challenge</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personalized gaming experience for each player</li>
          <li>Reduced frustration and increased engagement</li>
          <li>Continuous learning and improvement of the balancing system</li>
          <li>Data-driven insights for game design iterations</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <p className="mb-4">To implement dynamic difficulty balancing:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Define key performance indicators (KPIs) for player success</li>
          <li>Set up data collection points throughout the game</li>
          <li>Train the ML model on existing player data</li>
          <li>Implement real-time adjustments based on model predictions</li>
          <li>Continuously refine the model with new data</li>
        </ol>
      </section>

      <div className="space-y-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
          Start Balancing
        </Button>
        <Link to="/get-started">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to AI Features
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DifficultyBalancing;
