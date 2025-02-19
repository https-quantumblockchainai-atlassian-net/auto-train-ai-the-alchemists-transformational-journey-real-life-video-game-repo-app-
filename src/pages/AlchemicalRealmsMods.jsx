import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlchemicalRealmsMods = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Alchemical Realms Community Mods</h1>
      <p className="text-xl mb-8">Explore and download community-created mods to enhance your alchemical journey.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Featured Mods</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Expanded Alchemical Elements</li>
            <li>New Dimensional Realms</li>
            <li>Enhanced Empathic Abilities</li>
            <li>Quantum Puzzle Pack</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Mod Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside">
            <li>Download the mod file</li>
            <li>Place it in your game's "mods" folder</li>
            <li>Enable the mod in the game settings</li>
            <li>Restart the game to apply changes</li>
          </ol>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Create Your Own Mod</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Access our Alchemical Modding Tools and Documentation to create and share your own mods with the community.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlchemicalRealmsMods;