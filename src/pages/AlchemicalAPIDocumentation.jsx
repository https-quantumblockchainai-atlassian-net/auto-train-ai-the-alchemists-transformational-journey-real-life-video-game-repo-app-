import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlchemicalAPIDocumentation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Alchemical Video Generation API</h1>
      <p className="text-xl mb-8">Integrate the power of alchemical transformations into your applications.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>POST /api/generate-alchemical-video</li>
            <li>GET /api/alchemical-elements</li>
            <li>POST /api/transmute-scene</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use your Quantum Alchemist API key for all requests. Include it in the header:</p>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            X-Alchemist-API-Key: your_api_key_here
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlchemicalAPIDocumentation;