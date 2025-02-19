import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from '@tanstack/react-query';
import { Loader2, AlertCircle } from 'lucide-react';
import { analyzeResearch } from '../utils/researchUtils';
import { Link } from 'react-router-dom';

const fetchResearchData = async () => {
  // This is a mock function. In a real scenario, you'd fetch data from an API
  return [
    { id: 1, title: "Quantum Mechanics Basics", type: "Article", url: "/wiki/quantum-mechanics-basics" },
    { id: 2, title: "Advanced Particle Physics", type: "Video", url: "/tutorials/advanced-particle-physics" },
    { id: 3, title: "Unreal Engine 5.5 Documentation", type: "Documentation", url: "https://docs.unrealengine.com/5.5/en-US/" },
    { id: 4, title: "Game Design Principles", type: "Article", url: "/wiki/game-design-principles" },
    { id: 5, title: "AI Integration in Games", type: "Tutorial", url: "/tutorials/ai-integration" },
    { id: 6, title: "Quantum Blockchain AI: An Overview", type: "Article", url: "/wiki/quantum-blockchain-ai" },
    { id: 8, title: "Quantum Game Development Wiki", type: "Wiki", url: "/wiki/quantum-game-dev" },
    { id: 9, title: "Quantum Physics SDK", type: "SDK", url: "/sdk/quantum-physics" },
    { id: 10, title: "Game Modding Tutorial", type: "Tutorial", url: "/tutorials/game-modding" },
  ];
};

const ResearchDashboard = () => {
  const { data: research, isLoading, error } = useQuery({
    queryKey: ['research'],
    queryFn: fetchResearchData,
  });

  const missingElements = analyzeResearch(research);

  if (isLoading) return <Loader2 className="h-8 w-8 animate-spin" />;
  if (error) return <AlertCircle className="h-8 w-8 text-red-500" />;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Research Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {research.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Type: {item.type}</p>
              <Button asChild className="w-full">
                <Link to={item.url}>View Resource</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {missingElements.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Missing Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {missingElements.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      <div className="mt-6">
        <Link to="/tutorials">
          <Button>View Practical Tutorials</Button>
        </Link>
      </div>
    </div>
  );
};

export default ResearchDashboard;
