import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Book, Code, Puzzle, Wand2 } from 'lucide-react';

const ResourceLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-purple-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Link to="/api/documentation" className="text-blue-400 hover:underline">Quantum Realms API</Link></li>
            <li><Link to="/sdk/quantum-physics" className="text-blue-400 hover:underline">Quantum Physics SDK</Link></li>
            <li><Link to="/wiki/quantum-mechanics" className="text-blue-400 hover:underline">Quantum Mechanics Wiki</Link></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Development Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Link to="/tools/quantum-debugger" className="text-blue-400 hover:underline">Quantum Debugger</Link></li>
            <li><Link to="/tools/realm-inspector" className="text-blue-400 hover:underline">Realm Inspector</Link></li>
            <li><Link to="/tools/quantum-profiler" className="text-blue-400 hover:underline">Quantum Profiler</Link></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Puzzle className="h-5 w-5" />
            Community Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Link to="/mods/community" className="text-blue-400 hover:underline">Community Mods</Link></li>
            <li><Link to="/forum" className="text-blue-400 hover:underline">Quantum Realms Forum</Link></li>
            <li><a href="https://discord.gg/quantum-realms" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            Learning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Link to="/tutorials/quantum-basics" className="text-blue-400 hover:underline">Quantum Basics</Link></li>
            <li><Link to="/tutorials/advanced-realms" className="text-blue-400 hover:underline">Advanced Realms</Link></li>
            <li><Link to="/tutorials/creature-creation" className="text-blue-400 hover:underline">Creature Creation</Link></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceLinks;