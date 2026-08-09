// Project data — consumed by projectsFilter.js to render cards + modal details.
// githubLink is null where no matching public repo was found under
// github.com/leekhithnunna (e.g. research code not yet published, or a
// same-named repo that's actually an unrelated fork).
export const projectsData = [
  {
    id: 'cyclesync-plus',
    title: 'CycleSync+ — Personalized Digital Wellness System',
    category: 'Full Stack + AI',
    description:
      'Full-stack platform (React, Node.js, MongoDB) with menstrual cycle-phase prediction, personalized ' +
      'wellness recommendations, explainable rule-based reasoning, and a trend-analytics dashboard. ' +
      'Published at IEEE ICAISS 2026 — see Research.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/Rule-based logic'],
    githubLink: null,
  },
  {
    id: 'healthconnect-ai',
    title: 'HealthConnect AI — Healthcare Support Platform',
    category: 'Full Stack + AI',
    description:
      'AI-powered healthcare support and volunteer coordination platform with automated assistance workflows.',
    tech: ['JavaScript', 'Healthcare AI', 'Workflow Automation'],
    githubLink: 'https://github.com/leekhithnunna/healthconnect-ai',
  },
  {
    id: 'talkbook',
    title: 'TalkBook — AI Booking Assistant',
    category: 'Full Stack + AI',
    description:
      'Conversational booking assistant built with Streamlit, LangChain, and the Groq LLM — supports PDF ' +
      'upload/querying and end-to-end appointment management.',
    tech: ['Python', 'Streamlit', 'LangChain', 'Groq LLM'],
    githubLink: 'https://github.com/leekhithnunna/TalkBook',
  },
  {
    id: 'optimind-ai',
    title: 'OptiMind AI — Productivity & Wellness Analytics Platform',
    category: 'Full Stack + AI',
    description:
      'AI-powered productivity and wellness analytics platform built with Node.js, Express, PostgreSQL, and ' +
      'OpenAI — secure journaling, LLM-based coaching, and interactive dashboards.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'OpenAI'],
    githubLink: 'https://github.com/leekhithnunna/optimind-ai-productivity-platform',
  },
  {
    id: 'smart-image-cleanup',
    title: 'Smart Image Cleanup Tool',
    category: 'Computer Vision',
    description:
      'Python-based image management system using AI to automatically detect blurred, duplicate, and outdated ' +
      'photos — perceptual hashing, Laplacian-variance blur detection, metadata extraction, and Dlib face ' +
      'detection behind a Tkinter GUI. Presented at IC4S 2025 — see Research.',
    tech: ['Python', 'OpenCV', 'Tkinter', 'Dlib', 'Computer Vision'],
    githubLink: 'https://github.com/leekhithnunna/Smart-Image-Cleanup-Tool-using-Mesa-and-Simulation',
  },
  {
    id: 'coconut-leaf-disease',
    title: 'Coconut Leaf Disease Classification',
    category: 'Computer Vision',
    description:
      'Comprehensive comparison of ML, deep learning, and transformer-based models — from handcrafted features ' +
      'to Vision Transformers — for real-world agricultural diagnostics.',
    tech: ['Python', 'Vision Transformers', 'Deep Learning'],
    githubLink:
      'https://github.com/leekhithnunna/From-Handcrafted-Features-to-Vision-Transformers-A-Study-on-Coconut-Leaf-Disease-Classification',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock-Paper-Scissors — MobileNetV2 & Gradio',
    category: 'Computer Vision',
    description:
      'Real-time gesture-based game against an AI opponent, powered by a trained MobileNetV2 CNN with an ' +
      'interactive Gradio GUI.',
    tech: ['Python', 'MobileNetV2', 'Gradio'],
    githubLink: 'https://github.com/leekhithnunna/Rock-Paper-Scissors-Game-using-MobileNetV2-Gradio-GUI',
  },
  {
    id: 'telugu-viva-classification',
    title: 'Code-Mixed Telugu Viva Response Classification',
    category: 'NLP + Speech Processing',
    description:
      'Deep learning pipeline to classify code-switched Telugu–English viva responses by integrating speech ' +
      'and textual features for multilingual academic evaluation. Related paper, "Transformer-Based Semantic ' +
      'Evaluation of Telugu–English Code-Mixed Viva Responses," presented at IEEE CONECCT 2026 — see Research.',
    tech: ['Python', 'NLP', 'Speech Processing', 'Deep Learning'],
    githubLink: null,
  },
  {
    id: 'fake-review-detection',
    title: 'Multilingual Fake Review Detection Using Machine Learning',
    category: 'NLP + ML',
    description:
      'Identifies deceptive reviews across English, Telugu, and Malayalam using BERT, LASER, and FastText ' +
      'embeddings with ensemble/stacking classifiers.',
    tech: ['Python', 'BERT', 'LASER', 'FastText', 'Ensemble Models'],
    githubLink: null,
  },
  {
    id: 'twitter-rumour-verification',
    title: 'Twitter Rumour Verification',
    category: 'NLP + ML',
    description:
      'Detects and verifies rumours in Twitter data using multiple classification approaches — implements 11 ' +
      'different classification models for comparison.',
    tech: ['Python', 'NLP', 'Machine Learning'],
    githubLink: 'https://github.com/leekhithnunna/Twitter_15_16_Rumour_Verification',
  },
  {
    id: 'skytrax-naive-bayes',
    title: 'Probabilistic Naive Bayes on Skytrax Reviews',
    category: 'NLP + ML',
    description:
      'Full probabilistic Naive Bayes sentiment-classification system for airline-industry reviews, built ' +
      'across four Skytrax datasets — Airline, Airport, Lounge, and Seat. Related paper, "Smooth Adaptive ' +
      'Synthetic Sampling Approach for Improving Naive Bayes-Based Airline Service Sentiment Classification," ' +
      'presented at CML 2026 — see Research.',
    tech: ['Python', 'Naive Bayes', 'NLP', 'Sentiment Analysis'],
    githubLink: 'https://github.com/leekhithnunna/Probabilistic-Naive-Bayes-on-Skytrax-Reviews',
  },
  {
    id: 'trade-ai',
    title: 'Trade.ai — Crypto Trading Analytics',
    category: 'FinTech + ML',
    description:
      'Analyzes 200K+ trades against Fear & Greed Index sentiment data for profitability and position-sizing ' +
      'insight, backed by an EDA and data-cleaning pipeline.',
    tech: ['Python', 'Sentiment Analysis', 'Trading Analytics'],
    githubLink: 'https://github.com/leekhithnunna/Trade.ai',
  },
  {
    id: 'trading-signal-mlops',
    title: 'Trading Signal MLOps Pipeline',
    category: 'FinTech + ML',
    description:
      'Deterministic trading-signal generation using a rolling-mean strategy, with YAML-based configuration, ' +
      'structured logging, and metrics tracking & validation.',
    tech: ['Python', 'MLOps', 'YAML Config'],
    githubLink: 'https://github.com/leekhithnunna/trading-signal-mlops-pipeline',
  },
  {
    id: 'waste-management-system',
    title: 'Waste Management System — Smart-City ML at Scale',
    category: 'Distributed ML',
    description:
      'Apache Spark-based distributed ML system predicting smart-city waste over a 263K+ record dataset with ' +
      'weather and urban features, using engineered features and linear regression at scale.',
    tech: ['Python', 'Apache Spark', 'Distributed ML', 'Feature Engineering'],
    githubLink: 'https://github.com/leekhithnunna/waste_managment_system',
  },
  {
    id: 'climate-risk-matlab',
    title: 'Regional Climate Risk Assessment — MATLAB GUI',
    category: 'Climate + ML',
    description:
      'Interactive MATLAB GUI using standardization, UMAP, and clustering to predict regional climate ' +
      'adaptation capacity from user-input climate and agricultural data. Related paper, "Forecasting Regional ' +
      'Climate Vulnerability through Machine Learning and Weighted Risk Scoring," presented at IJCACI 2025 — ' +
      'see Research.',
    tech: ['MATLAB', 'UMAP', 'Clustering'],
    githubLink: 'https://github.com/leekhithnunna/An-Interactive-MATLAB-GUI-for-Regional-Risk-Assessment-Using-ML-and-UMAP',
  },
  {
    id: 'personasynth',
    title: 'PersonaSynth — Synthetic Personality Generator',
    category: 'Generative AI',
    description:
      'AI-powered synthetic data generator for personality traits using a Conditional Variational Autoencoder ' +
      '(CVAE) — given a personality type, generates matching synthetic profiles.',
    tech: ['Python', 'CVAE', 'Synthetic Data'],
    githubLink: 'https://github.com/leekhithnunna/PersonaSynth---CVAE-Based-Personality-Profile-Generator',
  },
];
