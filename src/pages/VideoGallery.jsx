import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Play, Download } from 'lucide-react';

const VideoGallery = () => {
  const generatedVideos = [
    { id: 1, title: "Quantum Realm Trailer", duration: "00:30", thumbnail: "/placeholder.svg" },
    { id: 2, title: "Multidimensional Gameplay", duration: "01:15", thumbnail: "/placeholder.svg" },
    { id: 3, title: "AI-Generated Cutscene", duration: "00:45", thumbnail: "/placeholder.svg" },
  ];

  const handlePreview = (videoId) => {
    // Implement preview functionality
    console.log(`Previewing video ${videoId}`);
  };

  const handleDownload = (videoId) => {
    // Implement download functionality
    console.log(`Downloading video ${videoId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Generated Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedVideos.map((video) => (
          <div key={video.id} className="bg-purple-800 rounded-lg overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-sm mb-4">Duration: {video.duration}</p>
              <div className="flex space-x-2">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 flex items-center"
                  onClick={() => handlePreview(video.id)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 flex items-center"
                  onClick={() => handleDownload(video.id)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/generate-video">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-lg">
            Generate More Videos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VideoGallery;
