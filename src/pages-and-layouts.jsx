import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import AIDesignFeatures from "./components/AIDesignFeatures";
import VideoGallery from "./pages/VideoGallery";
import GenerateVideo from "./pages/GenerateVideo";
import GenerateEnvironment from "./pages/GenerateEnvironment";
import EnvironmentGallery from "./pages/EnvironmentGallery";
import OptimizedGameElements from "./pages/OptimizedGameElements";
import QuantumPhysicsMechanics from "./pages/QuantumPhysicsMechanics";
import DifficultyBalancing from "./pages/DifficultyBalancing";
import QuantumSimulations from "./pages/QuantumSimulations";
import AIStorylines from "./pages/AIStorylines";
import QuantumPuzzles from "./pages/QuantumPuzzles";
import TextToVideo from "./pages/TextToVideo";
import ProceduralEnvironments from "./pages/ProceduralEnvironments";
import APIDocumentation from "./pages/APIDocumentation";
import SDKIntegration from "./pages/SDKIntegration";
import Wiki from "./pages/Wiki";
import CommunityMods from "./pages/CommunityMods";
import Tutorials from "./pages/Tutorials";
import ResearchDashboard from "./components/ResearchDashboard";
import Demo from "./pages/Demo";
import Forum from "./pages/Forum";
import QuantumGameDevWiki from "./pages/QuantumGameDevWiki";
import QuantumPhysicsSDK from "./pages/QuantumPhysicsSDK";
import GameModdingTutorial from "./pages/GameModdingTutorial";
import UnrealEngineIntegration from "./pages/UnrealEngineIntegration";
import NvidiaAce from "./pages/NvidiaAce";
import Nims from "./pages/Nims";
import InworldAi from "./pages/InworldAi";
import MetaHumans from "./pages/MetaHumans";
import CinematicExperiences from "./pages/CinematicExperiences";
import GPTEngineerDashboard from "./pages/GPTEngineerDashboard";
import EOSAIIntegration from "./pages/EOSAIIntegration";
import CybersecurityVanguard from "./pages/CybersecurityVanguard";
import CrystalAIAssistant from "./pages/CrystalAIAssistant";
import AlchemicalRealmsMods from "./pages/AlchemicalRealmsMods";
import QuantumSuperposition from "./pages/features/QuantumSuperposition";
import EntanglementMultiplayer from "./pages/wiki/EntanglementMultiplayer";
import QuantumProceduralGeneration from "./pages/features/QuantumProceduralGeneration";
import QuantumCryptography from "./pages/features/QuantumCryptography";
import BlueprintsDocumentation from "./pages/BlueprintsDocumentation";
import ComponentsLibrary from "./pages/ComponentsLibrary";
import ConfigurationGuide from "./pages/ConfigurationGuide";
import QuantumAlgorithmsResearch from "./pages/QuantumAlgorithmsResearch";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/get-started", element: <GetStarted /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/ai-design-features", element: <AIDesignFeatures /> },
      { path: "/video-gallery", element: <VideoGallery /> },
      { path: "/generate-video", element: <GenerateVideo /> },
      { path: "/generate-environment", element: <GenerateEnvironment /> },
      { path: "/environment-gallery", element: <EnvironmentGallery /> },
      { path: "/features/optimized-game-elements", element: <OptimizedGameElements /> },
      { path: "/features/quantum-physics-mechanics", element: <QuantumPhysicsMechanics /> },
      { path: "/features/difficulty-balancing", element: <DifficultyBalancing /> },
      { path: "/features/quantum-simulations", element: <QuantumSimulations /> },
      { path: "/features/ai-storylines", element: <AIStorylines /> },
      { path: "/features/quantum-puzzles", element: <QuantumPuzzles /> },
      { path: "/features/text-to-video", element: <TextToVideo /> },
      { path: "/features/procedural-environments", element: <ProceduralEnvironments /> },
      { path: "/api/documentation", element: <APIDocumentation /> },
      { path: "/sdk/quantum-realm", element: <SDKIntegration /> },
      { path: "/wiki", element: <Wiki /> },
      { path: "/mods/community", element: <CommunityMods /> },
      { path: "/tutorials", element: <Tutorials /> },
      { path: "/research-dashboard", element: <ResearchDashboard /> },
      { path: "/demo", element: <Demo /> },
      { path: "/forum", element: <Forum /> },
      { path: "/wiki/quantum-game-dev", element: <QuantumGameDevWiki /> },
      { path: "/sdk/quantum-physics", element: <QuantumPhysicsSDK /> },
      { path: "/tutorials/game-modding", element: <GameModdingTutorial /> },
      { path: "/unreal-engine-integration", element: <UnrealEngineIntegration /> },
      { path: "/nvidia-ace", element: <NvidiaAce /> },
      { path: "/nims", element: <Nims /> },
      { path: "/inworld-ai", element: <InworldAi /> },
      { path: "/metahumans", element: <MetaHumans /> },
      { path: "/cinematic-experiences", element: <CinematicExperiences /> },
      { path: "/gpt-engineer-dashboard", element: <GPTEngineerDashboard /> },
      { path: "/eos-ai-integration", element: <EOSAIIntegration /> },
      { path: "/cybersecurity-vanguard", element: <CybersecurityVanguard /> },
      { path: "/crystal-ai-assistant", element: <CrystalAIAssistant /> },
      { path: "/quantum-physics-sdk", element: <QuantumPhysicsSDK /> },
      { path: "/alchemical-realms-mods", element: <AlchemicalRealmsMods /> },
      { path: "/features/quantum-superposition", element: <QuantumSuperposition /> },
      { path: "/features/entanglement-multiplayer", element: <EntanglementMultiplayer /> },
      { path: "/features/quantum-procedural-generation", element: <QuantumProceduralGeneration /> },
      { path: "/features/quantum-cryptography", element: <QuantumCryptography /> },
      { path: "/blueprints", element: <BlueprintsDocumentation /> },
      { path: "/components", element: <ComponentsLibrary /> },
      { path: "/quantum-algorithms-research", element: <QuantumAlgorithmsResearch /> },
      { path: "/configuration", element: <ConfigurationGuide /> }
    ]
  }
]);