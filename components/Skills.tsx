const skills = [
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Transformers", "Neural Networks"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Node.js", "TailwindCSS", "REST APIs"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Jupyter", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-3xl -z-10"></div>
      <div className="relative z-10 p-8 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}