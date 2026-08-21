// Skills grouped by category — consumed by skillsAnimation.js to render tags.
// Each item carries either a `logo` (brand icon URL, from devicon/simple-icons
// CDNs) or an `icon` key (a hand-drawn fallback in js/data/skillIcons.js) for
// concepts and soft skills that don't have an official logo.
const devicon = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

export const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', logo: devicon('python') },
      { name: 'C', logo: devicon('c') },
      { name: 'Java', logo: devicon('java') },
      { name: 'JavaScript', logo: devicon('javascript') },
      { name: 'TypeScript', logo: devicon('typescript') },
      { name: 'HTML', logo: devicon('html5') },
      { name: 'CSS', logo: devicon('css3') },
      { name: 'MySQL', logo: devicon('mysql') },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Scikit-Learn', logo: devicon('scikitlearn') },
      { name: 'OpenCV', logo: devicon('opencv') },
      { name: 'NLP', icon: 'nlp' },
      { name: 'TensorFlow', logo: devicon('tensorflow') },
      { name: 'Computer Vision', icon: 'vision' },
      { name: 'Vision Transformers', icon: 'transformer' },
      { name: 'Apache Spark', logo: devicon('apachespark') },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', logo: devicon('react') },
      { name: 'Node.js', logo: devicon('nodejs') },
      { name: 'Streamlit', logo: devicon('streamlit') },
      { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain' },
      { name: 'Groq', icon: 'groq' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', logo: devicon('git') },
      { name: 'Google Colab', logo: devicon('googlecolab') },
      { name: 'VS Code', logo: devicon('vscode') },
      { name: 'MATLAB', logo: devicon('matlab') },
      { name: 'Arduino IDE', logo: devicon('arduino') },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Communication', icon: 'communication' },
      { name: 'Team Management', icon: 'team' },
      { name: 'Leadership', icon: 'leadership' },
    ],
  },
];
