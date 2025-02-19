export const analyzeResearch = (research) => {
  const missingElements = [];
  const requiredTopics = [
    'Quantum Mechanics',
    'Unreal Engine',
    'Game Design',
    'AI Integration',
    'Quantum Blockchain',
    'Quantum Algorithms',
    'Quantum Game Development',
    'Quantum Physics SDK',
    'Game Modding'
  ];
  
  const researchTopics = research ? research.map(item => item.title.toLowerCase()) : [];
  
  requiredTopics.forEach(topic => {
    if (!researchTopics.some(t => t.includes(topic.toLowerCase()))) {
      missingElements.push(`Research on ${topic}`);
    }
  });
  
  if (!researchTopics.some(t => t.includes('tutorial') || t.includes('guide'))) {
    missingElements.push('Practical tutorials or guides');
  }
  
  if (!researchTopics.some(t => t.includes('wiki'))) {
    missingElements.push('Comprehensive wiki or knowledge base');
  }
  
  if (!researchTopics.some(t => t.includes('sdk') || t.includes('api'))) {
    missingElements.push('SDK or API documentation');
  }
  
  if (!researchTopics.some(t => t.includes('mod') || t.includes('plugin'))) {
    missingElements.push('Modding or plugin resources');
  }
  
  return missingElements;
};