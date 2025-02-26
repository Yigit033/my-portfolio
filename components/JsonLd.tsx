'use client';

import Script from 'next/script';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yiğit Tilaver',
    url: 'https://yigittilaver.dev',
    image: 'https://yigittilaver.dev/projects/profile-photo.jpg',
    sameAs: [
      'https://github.com/Yigit033',
      'https://www.linkedin.com/in/yigittilaver/',
    ],
    jobTitle: 'AI/ML/DL/Data Science Enthusiast',
    worksFor: {
      '@type': 'Organization',
      name: 'Istanbul Technical University',
    },
    description: 'AI/ML/DL/Data Science Enthusiast specializing in Python, TensorFlow, PyTorch, and Data Science',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Python',
      'TensorFlow',
      'PyTorch',
      'Data Science',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Istanbul Technical University',
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
