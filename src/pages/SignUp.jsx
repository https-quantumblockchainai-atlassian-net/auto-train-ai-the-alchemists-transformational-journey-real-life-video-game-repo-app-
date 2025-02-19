import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up submitted');
    toast.success('Sign up successful! Welcome to the Quantum Realm, Crystal Alchemist!');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Sign Up for Quantum Realm Access</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username" 
            type="text" 
            placeholder="Crystal Alchemist" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-purple-800 text-white"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="q1blue@quantumblockchainlabs.onmicrosoft.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-purple-800 text-white"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="Enter your mystical password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-purple-800 text-white"
          />
        </div>
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">Inscribe Your Name in the Cosmic Ledger</Button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore the Quantum Realm</h2>
        <div className="space-y-2">
          <Link to="/api/documentation" className="text-indigo-400 hover:underline block">API Documentation</Link>
          <Link to="/sdk/integration" className="text-indigo-400 hover:underline block">SDK Integration Guide</Link>
          <Link to="/wiki" className="text-indigo-400 hover:underline block">Quantum Realm Wiki</Link>
          <Link to="/mods" className="text-indigo-400 hover:underline block">Community Mods</Link>
          <Link to="/tutorials" className="text-indigo-400 hover:underline block">Arcane Tutorials</Link>
        </div>
      </div>
      <footer className="mt-12 text-center text-gray-400">
        <p>&copy; 2024 Quantum Realm Game Builder Kit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;