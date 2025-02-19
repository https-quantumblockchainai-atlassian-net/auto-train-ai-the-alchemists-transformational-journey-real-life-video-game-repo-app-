import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Tutorials = () => {
  const tutorials = [
    { id: 1, title: "Getting Started with Quantum Game Development", url: "/tutorials/quantum-game-dev-intro" },
    { id: 2, title: "AI Integration in Quantum Games", url: "/tutorials/ai-integration" },
    { id: 3, title: "Advanced Game Design for Quantum Realms", url: "/tutorials/quantum-game-design" },
    { id: 4, title: "Modding Quantum Games: A Beginner's Guide", url: "/tutorials/quantum-game-modding" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Practical Tutorials and Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id}>
            <CardHeader>
              <CardTitle>{tutorial.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to={tutorial.url}>Start Tutorial</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;