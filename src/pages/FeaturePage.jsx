import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const featureDetails = {
  'text-to-game': {
    title: 'Text to Game',
    description: 'Convert text descriptions into playable game elements using advanced AI algorithms.',
    link: 'https://openai.com/research/gpt-3-apps',
  },
  'text-to-video': {
    title: 'Text to Video',
    description: 'Generate in-game cutscenes and animations from text inputs, bringing your stories to life.',
    link: 'https://runwayml.com/text-to-video/',
  },
  'text-to-image': {
    title: 'Text to Image',
    description: 'Create game assets and textures from text descriptions, streamlining your asset creation process.',
    link: 'https://openai.com/dall-e-2',
  },
  'mod-creation': {
    title: 'Mod Creation',
    description: 'Easily create and integrate game modifications, extending the lifespan and engagement of your games.',
    link: 'https://www.nexusmods.com/',
  },
  'api-integration': {
    title: 'API Integration',
    description: 'Seamlessly connect with external services and data sources to enrich your game experience.',
    link: 'https://rapidapi.com/collection/gaming-apis',
  },
  'wiki-generator': {
    title: 'Wiki Generator',
    description: 'Automatically generate comprehensive documentation for your game, improving player engagement and support.',
    link: 'https://www.mediawiki.org/wiki/API:Main_page',
  },
  'solana-ai': {
    title: 'Solana AI Integration',
    description: 'Integrate Solana blockchain features with AI capabilities, enabling decentralized AI-driven game mechanics.',
    link: 'https://solana.com/developers',
  },
  'multi-blockchain': {
    title: 'Multi-Blockchain Support',
    description: 'Interoperable support for XRPL and other blockchains, allowing for cross-chain asset transfers and gameplay.',
    link: 'https://xrpl.org/dev-tools.html',
  },
  'quantum-blockchain-ai': {
    title: 'Quantum Blockchain AI',
    description: 'Harness the power of quantum computing in blockchain AI, enabling advanced cryptography and AI decision-making.',
    link: 'https://www.ibm.com/quantum',
  },
  'quantum-blockchain-labs': {
    title: 'Quantum Blockchain Labs',
    description: 'Access experimental features from Quantum Blockchain research, pushing the boundaries of blockchain technology in gaming.',
    link: 'https://www.nature.com/articles/s41586-021-03224-9',
  },
  'multi-dimensional': {
    title: 'Multi-Dimensional Universes',
    description: 'Create and explore multi-dimensional game worlds, offering players unique and mind-bending experiences.',
    link: 'https://en.wikipedia.org/wiki/String_theory',
  },
  'zodiac-numerology': {
    title: 'Zodiac & Numerology Integration',
    description: 'Incorporate cosmic elements into gameplay mechanics, adding depth and personalization to player experiences.',
    link: 'https://en.wikipedia.org/wiki/Astrology',
  }
};

const FeaturePage = () => {
  const { featureId } = useParams();
  const feature = featureDetails[featureId] || {
    title: 'Unknown Feature',
    description: 'Details for this feature are not available.',
    link: '#',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">{feature.title}</h1>
      <p className="text-xl mb-8">{feature.description}</p>
      <div className="space-y-4">
        <a href={feature.link} target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Learn More
          </Button>
        </a>
        <Link to="/">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturePage;
