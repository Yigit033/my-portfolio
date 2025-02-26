interface EducationItem {
  degree: string;
  school: string;
  period: string;
  link: string;
}

interface TrainingItem {
  title: string;
  institution: string;
  period: string;
  link: string;  
}

const education: EducationItem[] = [
  {
    degree: "Bachelor's degree, Ship and Marine Technology Engineering",
    school: "Istanbul Technical University",
    period: "07/09/2020 – Current",
    link: "https://www.itu.edu.tr/tr"
  },
  {
    degree: "Open Education Student - Computer Programming",
    school: "Anadolu University",
    period: " 18/10/2022 – Current",
    link: "https://www.anadolu.edu.tr/"
  },
  {
    degree: "Erasmus+ Student Exchange Program",
    school: "Universitat Politècnica de Catalunya · Barcelona Tech - UPC ",
    period: "10/02/2024 – 30/07/2024",
    link: "https://www.fnb.upc.edu/"
  }
];

const training: TrainingItem[] = [
  {
    title: "Sales Sport Engineer Intern",
    institution: "Bulutlu Makine",
    period: "2024",
    link: "https://www.bulutlumarine.com/en-US"
  },
  {
    title: "Production Engineering Specialist Intern",
    institution: "Bilgin Yachts",
    period: "2023",
    link: "https://bilginyacht.com/"
  },
  {
    title: "Design and Project Engineer Intern",
    institution: "ART Shipyard",
    period: "2023",
    link: "http://www.artshipyard.com/"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-3xl -z-10"></div>
      <div className="relative z-10 p-8 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Education & Training
        </h2>

        {/* Education Section */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-500 before:to-teal-400 before:rounded-full"
            >
              <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
                    {item.period}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">{item.school}</span>
                </div>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Training Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {training.map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-800 bg-gray-800/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
                    {item.period}
                  </span>
                </div>
                <p className="text-blue-400 mb-2">{item.institution}</p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}