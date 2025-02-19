import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const ConfigurationGuide = () => {
  const [config, setConfig] = useState({
    planckConstant: 6.626e-34,
    decoherenceRate: 0.5,
    entanglementStrength: 0.7,
    simultaneousDimensions: 3,
    transitionEffects: 0.6,
    quantumFogDensity: 0.4,
    aiDecisionFrequency: 0.8,
    landscapeComplexity: 0.6,
    difficultyAdjustment: 0.5
  });

  const handleSliderChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value[0] }));
  };

  const handleSave = () => {
    // In a real application, this would save to a backend or local storage
    console.log('Saving configuration:', config);
    toast.success('Configuration saved successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Configuration Guide</h1>
      <p className="text-xl mb-8">Fine-tune your quantum realm for optimal performance and immersion.</p>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Quantum Physics Engine Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="planckConstant">Planck Constant Value (x10^-34 J⋅s)</Label>
              <Slider
                id="planckConstant"
                min={6.0}
                max={7.0}
                step={0.001}
                value={[config.planckConstant * 1e34]}
                onValueChange={(value) => handleSliderChange('planckConstant', [value[0] * 1e-34])}
              />
              <p className="text-sm text-gray-300 mt-1">Adjusts the fundamental quantum of action, affecting all quantum calculations.</p>
            </div>
            <div>
              <Label htmlFor="decoherenceRate">Quantum Decoherence Rate</Label>
              <Slider
                id="decoherenceRate"
                min={0}
                max={1}
                step={0.01}
                value={[config.decoherenceRate]}
                onValueChange={(value) => handleSliderChange('decoherenceRate', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Controls how quickly quantum states collapse into classical states.</p>
            </div>
            <div>
              <Label htmlFor="entanglementStrength">Entanglement Strength Factor</Label>
              <Slider
                id="entanglementStrength"
                min={0}
                max={1}
                step={0.01}
                value={[config.entanglementStrength]}
                onValueChange={(value) => handleSliderChange('entanglementStrength', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Determines the strength of quantum entanglement effects in the game world.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>Multi-Dimensional Rendering Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="simultaneousDimensions">Number of Simultaneous Dimensions</Label>
              <Slider
                id="simultaneousDimensions"
                min={1}
                max={10}
                step={1}
                value={[config.simultaneousDimensions]}
                onValueChange={(value) => handleSliderChange('simultaneousDimensions', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Sets the number of parallel dimensions that can be rendered simultaneously.</p>
            </div>
            <div>
              <Label htmlFor="transitionEffects">Inter-dimensional Transition Effects</Label>
              <Slider
                id="transitionEffects"
                min={0}
                max={1}
                step={0.01}
                value={[config.transitionEffects]}
                onValueChange={(value) => handleSliderChange('transitionEffects', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Adjusts the visual intensity of transitions between dimensions.</p>
            </div>
            <div>
              <Label htmlFor="quantumFogDensity">Quantum Fog Density</Label>
              <Slider
                id="quantumFogDensity"
                min={0}
                max={1}
                step={0.01}
                value={[config.quantumFogDensity]}
                onValueChange={(value) => handleSliderChange('quantumFogDensity', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Controls the density of the quantum fog that obscures distant objects and dimensions.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle>AI and Procedural Generation Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="aiDecisionFrequency">Quantum AI Decision-making Frequency</Label>
              <Slider
                id="aiDecisionFrequency"
                min={0}
                max={1}
                step={0.01}
                value={[config.aiDecisionFrequency]}
                onValueChange={(value) => handleSliderChange('aiDecisionFrequency', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Determines how often AI entities make decisions based on quantum principles.</p>
            </div>
            <div>
              <Label htmlFor="landscapeComplexity">Procedural Quantum Landscape Complexity</Label>
              <Slider
                id="landscapeComplexity"
                min={0}
                max={1}
                step={0.01}
                value={[config.landscapeComplexity]}
                onValueChange={(value) => handleSliderChange('landscapeComplexity', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Adjusts the complexity and detail level of procedurally generated quantum landscapes.</p>
            </div>
            <div>
              <Label htmlFor="difficultyAdjustment">Dynamic Difficulty Adjustment Sensitivity</Label>
              <Slider
                id="difficultyAdjustment"
                min={0}
                max={1}
                step={0.01}
                value={[config.difficultyAdjustment]}
                onValueChange={(value) => handleSliderChange('difficultyAdjustment', value)}
              />
              <p className="text-sm text-gray-300 mt-1">Controls how quickly the game adapts its difficulty based on player performance.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700">
        Save Configuration
      </Button>
    </div>
  );
};

export default ConfigurationGuide;