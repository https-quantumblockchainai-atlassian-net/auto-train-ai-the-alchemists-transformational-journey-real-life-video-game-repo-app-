import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
import { calculateQuantumState } from '../utils/quantumUtils';

const TimeMachine = () => {
  const [crystalType, setCrystalType] = useState('');
  const [timeDestination, setTimeDestination] = useState('');
  const [quantumState, setQuantumState] = useState(null);

  const handleCrystalCraft = () => {
    if (!crystalType) {
      toast.error("Please select a crystal type");
      return;
    }
    toast.success(`${crystalType} crystal crafted successfully!`);
  };

  const handleTimeTravel = () => {
    if (!timeDestination) {
      toast.error("Please enter a time destination");
      return;
    }
    const newQuantumState = calculateQuantumState(timeDestination);
    setQuantumState(newQuantumState);
    toast.success(`Traveled to ${timeDestination}. Quantum state: ${newQuantumState}`);
  };

  return (
    <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Crystallized Quantum Physics Multi-Dimensional Time Machine</h2>
      
      <div className="mb-4">
        <h3 className="text-xl mb-2">Crystal Crafting</h3>
        <Select onValueChange={setCrystalType}>
          <SelectTrigger className="w-full bg-purple-800 text-white">
            <SelectValue placeholder="Select crystal type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="timejump">Time Jump Crystal</SelectItem>
            <SelectItem value="physics">Physics Manipulation Crystal</SelectItem>
            <SelectItem value="dimensional">Dimensional Rift Crystal</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleCrystalCraft} className="mt-2 bg-blue-500 hover:bg-blue-600">Craft Crystal</Button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl mb-2">Time Travel</h3>
        <Input 
          type="text" 
          placeholder="Enter time destination (e.g., '1955-11-05')" 
          value={timeDestination}
          onChange={(e) => setTimeDestination(e.target.value)}
          className="bg-purple-800 text-white"
        />
        <Button onClick={handleTimeTravel} className="mt-2 bg-green-500 hover:bg-green-600">Initiate Time Travel</Button>
      </div>

      {quantumState && (
        <div className="mt-4">
          <h3 className="text-xl mb-2">Current Quantum State</h3>
          <p className="bg-purple-800 p-2 rounded">{quantumState}</p>
        </div>
      )}
    </div>
  );
};

export default TimeMachine;
