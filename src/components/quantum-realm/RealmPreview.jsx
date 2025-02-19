import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RealmPreview = ({ generatedEnvironment, realmTypes, availableCreatures }) => {
  if (!generatedEnvironment) return null;

  return (
    <Card className="bg-purple-800/50 backdrop-blur-sm mb-8">
      <CardHeader>
        <CardTitle>{generatedEnvironment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>Type: {realmTypes?.find(t => t.id === generatedEnvironment.type)?.name}</p>
          <div>
            <h3 className="font-semibold mb-2">Quantum Beings:</h3>
            <ul className="list-disc list-inside">
              {generatedEnvironment.creatures.map(creatureId => (
                <li key={creatureId}>
                  {availableCreatures?.find(c => c.id === creatureId)?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 aspect-video bg-purple-900/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Quantum Realm Visualization</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealmPreview;