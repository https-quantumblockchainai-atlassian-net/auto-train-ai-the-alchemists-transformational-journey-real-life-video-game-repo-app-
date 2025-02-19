import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Features from '@/components/Features';
import UnrealEngineFeatures from '@/components/UnrealEngineFeatures';

const Index = () => {
  return (
    <>
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Crystallized Quantum Physics</h1>
        <h2 className="text-3xl font-semibold mb-8">Multidimensional Matrix Game Builder</h2>
        <p className="text-xl mb-8">Harness the power of Unreal Engine 5.5 to create mind-bending quantum physics games</p>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          <Link to="/get-started">Get Started</Link>
        </Button>
      </header>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Game Builder Kit Features</h2>
        <Features />
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Unreal Engine 5.5 Development Studio</h2>
        <UnrealEngineFeatures />
      </section>
      
      <section className="bg-purple-800 py-16 mt-16 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to revolutionize game development?</h2>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          <a href="https://www.unrealengine.com/en-US/download" target="_blank" rel="noopener noreferrer">Launch Unreal Editor</a>
        </Button>
      </section>
    </>
  );
};

export default Index;
