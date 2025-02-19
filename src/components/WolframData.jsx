import React from 'react';

// Mock Wolfram Language Data
const mockWolframLanguageData = {
  "Cos": {
    "RelationshipCommunityGraph": {
      "nodes": ["Cos", "Sin", "Tan", "Sec"],
      "edges": [["Cos", "Sin"], ["Cos", "Sec"], ["Sin", "Tan"]]
    }
  },
  "Sin": {
    "DocumentationBasicExamples": [
      "Sin[0] = 0",
      "Sin[π/2] = 1",
      "Sin[π] = 0",
      "Sin[3π/2] = -1"
    ]
  }
};

const WolframData = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Wolfram Language Data</h2>
      <div className="bg-purple-800 p-4 rounded-lg">
        <p className="mb-2">Cos Relationship Community Graph:</p>
        <pre className="bg-purple-900 p-2 rounded overflow-x-auto">
          {JSON.stringify(mockWolframLanguageData["Cos"]["RelationshipCommunityGraph"], null, 2)}
        </pre>
      </div>
      <div className="bg-purple-800 p-4 rounded-lg mt-4">
        <p className="mb-2">Sin Documentation Basic Examples:</p>
        <pre className="bg-purple-900 p-2 rounded overflow-x-auto">
          {JSON.stringify(mockWolframLanguageData["Sin"]["DocumentationBasicExamples"], null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default WolframData;