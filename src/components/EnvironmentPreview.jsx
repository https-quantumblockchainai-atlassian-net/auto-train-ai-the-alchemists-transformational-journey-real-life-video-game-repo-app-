import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnvironmentPreview = ({ environment }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{environment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">Type: {environment.type}</p>
        {environment.creatures && environment.creatures.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold">Magical Creatures:</p>
            <ul className="list-disc list-inside">
              {environment.creatures.map(creature => (
                <li key={creature}>{creature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600">Environment Preview</span>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          This is a preview of your generated quantum environment. In a full implementation, this would show a 3D render or detailed description of the environment, including the magical creatures.
        </p>
      </CardContent>
    </Card>
  );
};

export default EnvironmentPreview;