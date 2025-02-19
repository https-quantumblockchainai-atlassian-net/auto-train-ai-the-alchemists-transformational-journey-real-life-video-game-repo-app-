import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from 'react-router-dom';

const GenerateVideo = () => {
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [duration, setDuration] = useState('');
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    setGenerating(true);
    // Simulating video generation process
    setTimeout(() => {
      setGenerating(false);
      navigate('/video-gallery'); // Redirect to the video gallery after generation
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generate Video</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="description" className="block text-lg mb-2">Video Description</label>
          <Textarea
            id="description"
            placeholder="Enter your video description or script here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 bg-purple-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="style" className="block text-lg mb-2">Visual Style</label>
          <Select onValueChange={setStyle}>
            <SelectTrigger className="w-full bg-purple-800 text-white">
              <SelectValue placeholder="Select a style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realistic">Realistic</SelectItem>
              <SelectItem value="cartoon">Cartoon</SelectItem>
              <SelectItem value="anime">Anime</SelectItem>
              <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="duration" className="block text-lg mb-2">Duration (in seconds)</label>
          <Input
            id="duration"
            type="number"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full bg-purple-800 text-white"
          />
        </div>
        <Button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg"
        >
          {generating ? 'Generating...' : 'Generate Video'}
        </Button>
        <Link to="/video-gallery">
          <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            View Generated Videos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GenerateVideo;
