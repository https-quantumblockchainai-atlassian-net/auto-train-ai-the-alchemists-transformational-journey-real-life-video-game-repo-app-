import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import OptimizedGameElements from "./pages/OptimizedGameElements";
import QuantumPhysicsMechanics from "./pages/QuantumPhysicsMechanics";
import ProceduralEnvironments from "./pages/ProceduralEnvironments";
import DifficultyBalancing from "./pages/DifficultyBalancing";
import QuantumSimulations from "./pages/QuantumSimulations";
import AIStorylines from "./pages/AIStorylines";
import QuantumPuzzles from "./pages/QuantumPuzzles";
import TextToVideo from "./pages/TextToVideo";
import GenerateVideo from "./pages/GenerateVideo";
import VideoGallery from "./pages/VideoGallery";
import GenerateEnvironment from "./pages/GenerateEnvironment";
import EnvironmentGallery from "./pages/EnvironmentGallery";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/get-started", element: <GetStarted /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/features/optimized-game-elements", element: <OptimizedGameElements /> },
      { path: "/features/quantum-physics-mechanics", element: <QuantumPhysicsMechanics /> },
      { path: "/features/procedural-environments", element: <ProceduralEnvironments /> },
      { path: "/features/difficulty-balancing", element: <DifficultyBalancing /> },
      { path: "/features/quantum-simulations", element: <QuantumSimulations /> },
      { path: "/features/ai-storylines", element: <AIStorylines /> },
      { path: "/features/quantum-puzzles", element: <QuantumPuzzles /> },
      { path: "/features/text-to-video", element: <TextToVideo /> },
      { path: "/generate-video", element: <GenerateVideo /> },
      { path: "/video-gallery", element: <VideoGallery /> },
      { path: "/generate-environment", element: <GenerateEnvironment /> },
      { path: "/environment-gallery", element: <EnvironmentGallery /> },
    ],
  },
]);
