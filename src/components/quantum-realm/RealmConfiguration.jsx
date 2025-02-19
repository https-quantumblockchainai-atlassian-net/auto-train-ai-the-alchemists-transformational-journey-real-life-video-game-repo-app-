import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RealmConfiguration = ({ 
  environmentName, 
  setEnvironmentName, 
  environmentType, 
  setEnvironmentType,
  creatures,
  setCreatures,
  realmTypes,
  availableCreatures 
}) => {
  return (
    <Card className="bg-purple-800/50 backdrop-blur-sm mb-8">
      <CardHeader>
        <CardTitle>Realm Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Name your quantum realm"
          value={environmentName}
          onChange={(e) => setEnvironmentName(e.target.value)}
          className="bg-purple-900/50 border-purple-500"
        />
        
        <Select onValueChange={setEnvironmentType}>
          <SelectTrigger className="bg-purple-900/50 border-purple-500">
            <SelectValue placeholder="Choose Realm Type" />
          </SelectTrigger>
          <SelectContent>
            {realmTypes?.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quantum Beings</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {availableCreatures?.map((creature) => (
              <div key={creature.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={creature.id}
                  checked={creatures.includes(creature.id)}
                  onCheckedChange={() => {
                    if (creatures.includes(creature.id)) {
                      setCreatures(creatures.filter(c => c !== creature.id));
                    } else {
                      setCreatures([...creatures, creature.id]);
                    }
                  }}
                />
                <label htmlFor={creature.id} className="text-sm cursor-pointer">
                  {creature.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealmConfiguration;