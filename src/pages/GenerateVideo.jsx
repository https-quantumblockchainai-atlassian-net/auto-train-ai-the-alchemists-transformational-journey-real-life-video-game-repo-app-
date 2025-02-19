import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Loader2, Film, Eye, ArrowLeft, Upload, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from 'sonner';

const GenerateVideo = () => {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [uploadedBlueprint, setUploadedBlueprint] = useState(null);

  const handleGenerate = async () => {
    setGenerating(true);
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 5000)),
      {
        loading: 'Generating epic cinematic video...',
        success: 'Epic cinematic video generated successfully!',
        error: 'Video generation failed. Please try again.',
      }
    );
    await new Promise(resolve => setTimeout(resolve, 5000));
    setGeneratedVideo('https://example.com/generated-epic-video.mp4');
    setGenerating(false);
  };

  const handleBlueprintUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedBlueprint(file.name);
      toast.success(`Blueprint "${file.name}" uploaded successfully!`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <h1 className="text-4xl font-bold mb-6">Generate Epic Cinematic Game Videos</h1>
      <p className="text-xl mb-8">Create stunning, realistic cinematic game trailers and in-game movies for your quantum realm adventures.</p>
      
      <Card className="mb-8 bg-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Film className="mr-2" />
            Epic Video Generation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter your epic video prompt here... (e.g., 'An epic journey through quantum realms, showcasing mind-bending physics and breathtaking landscapes')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mb-4 bg-purple-700 text-white"
            rows={4}
          />
          <div className="flex space-x-4 mb-4">
            <Input
              type="file"
              accept=".uasset"
              onChange={handleBlueprintUpload}
              className="flex-grow bg-purple-700 text-white"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="flex items-center bg-purple-600 hover:bg-purple-500">
                    <Upload className="mr-2" />
                    Upload Blueprint
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Upload an Unreal Engine 5.5 Blueprint to enhance your epic video generation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {uploadedBlueprint && (
            <p className="text-sm text-green-400 mb-4">Uploaded: {uploadedBlueprint}</p>
          )}
          <Button onClick={handleGenerate} disabled={generating || !prompt} className="w-full bg-indigo-600 hover:bg-indigo-500">
            {generating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Epic Video...
              </>
            ) : (
              'Generate Epic Video'
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedVideo && (
        <Card className="mb-8 bg-purple-800">
          <CardHeader>
            <CardTitle>Generated Epic Video</CardTitle>
          </CardHeader>
          <CardContent>
            <video src={generatedVideo} controls className="w-full rounded-lg shadow-lg" />
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <Link to="/video-gallery">
          <Button variant="outline" className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-500">
            <Eye className="mr-2" />
            View Epic Video Gallery
          </Button>
        </Link>
        <Link to="/">
          <Button variant="outline" className="w-full flex items-center justify-center bg-gray-600 hover:bg-gray-500">
            <ArrowLeft className="mr-2" />
            Back to Quantum Dashboard
          </Button>
        </Link>
      </div>

      <Card className="mt-8 bg-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="mr-2" />
            Additional Quantum Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><Link to="/api/video-generation" className="text-blue-400 hover:underline">Quantum Video API Documentation</Link></li>
            <li><Link to="/sdk/video-generation" className="text-blue-400 hover:underline">Quantum Video SDK Integration Guide</Link></li>
            <li><Link to="/wiki/video-generation" className="text-blue-400 hover:underline">Quantum Video Generation Wiki</Link></li>
            <li><Link to="/mods/video-generation" className="text-blue-400 hover:underline">Community Quantum Video Mods</Link></li>
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GenerateVideo;