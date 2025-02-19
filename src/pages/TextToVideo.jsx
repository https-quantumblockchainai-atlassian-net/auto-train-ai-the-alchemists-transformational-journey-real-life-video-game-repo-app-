import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TextToVideo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Alchemical Text to Cinematic Trailers</h1>
      <p className="text-xl mb-8">Transform mystical text descriptions into stunning, realistic cinematic game trailers and movies set in quantum realms.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Arcane Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-powered video generation from mystical text descriptions</li>
          <li>High-quality, realistic 3D rendering of multidimensional realms</li>
          <li>Customizable cinematic styles inspired by cosmic themes</li>
          <li>Automatic scene composition with quantum-inspired camera work</li>
          <li>Seamless integration with arcane game assets and ethereal characters</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alchemical Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rapid prototyping of mystical game trailers and quantum cutscenes</li>
          <li>Cost-effective production of enchanting marketing materials</li>
          <li>Effortless creation of in-game cinematics set in arcane dimensions</li>
          <li>Consistent visual quality across all multiversal video content</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Alchemical Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Inscribe your mystical text description or arcane script</li>
          <li>Select desired ethereal visual style and cosmic cinematic preferences</li>
          <li>Choose from a grimoire of pre-built quantum assets or import your own</li>
          <li>Allow the AI to weave the video sequence through the fabric of reality</li>
          <li>Fine-tune and transmute the result as needed</li>
        </ol>
      </section>

      <div className="space-y-4">
        <Link to="/generate-video">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Manifest Cinematic Vision
          </Button>
        </Link>
        <Link to="/video-gallery">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Explore Ethereal Video Gallery
          </Button>
        </Link>
        <Link to="/get-started">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Return to the Nexus
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TextToVideo;