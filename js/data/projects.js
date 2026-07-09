// Project data — consumed by projectsFilter.js to render cards + modal details.
// githubLink is null where the repo name is unconfirmed; fill in the real URL later.
export const projectsData = [
  {
    id: 'cyclesync-plus',
    title: 'Cyclesync+ — Personalized Digital Wellness System',
    category: 'Full Stack + AI',
    description:
      'Explainable wellness platform that detects menstrual cycle phases and delivers mood- and phase-aware ' +
      'nutrition/lifestyle recommendations using rule-based intelligence and trend analytics. Presented at ICAISS 2026.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/Rule-based logic'],
    githubLink: null,
  },
  {
    id: 'smart-image-cleanup',
    title: 'Smart Image Cleanup Tool',
    category: 'Computer Vision',
    description:
      'Python-based image management system using AI to automatically detect blurred, duplicate, and outdated photos.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    githubLink: null,
  },
  {
    id: 'telugu-viva-classification',
    title: 'Code-Mixed Telugu Viva Response Classification',
    category: 'NLP + Speech Processing',
    description:
      'Deep learning pipeline to classify code-switched Telugu–English viva responses by integrating speech ' +
      'and textual features for multilingual academic evaluation.',
    tech: ['Python', 'NLP', 'Speech Processing', 'Deep Learning'],
    githubLink: null,
  },
  {
    id: 'fake-review-detection',
    title: 'Multilingual Fake Review Detection Using Machine Learning',
    category: 'NLP + ML',
    description:
      'ML system to detect fake reviews across multiple languages using NLP embeddings and ensemble models.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Ensemble Models'],
    githubLink: null,
  },
];
