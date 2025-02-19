import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up submitted');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Join the Quantum Revolution</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <Input type="text" placeholder="Username" className="bg-blue-800 text-white" />
        <Input type="email" placeholder="Email" className="bg-blue-800 text-white" />
        <Input type="password" placeholder="Password" className="bg-blue-800 text-white" />
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
          Sign Up
        </Button>
      </form>
      <Link to="/">
        <Button className="mt-8 bg-transparent border border-white hover:bg-blue-800">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default SignUp;