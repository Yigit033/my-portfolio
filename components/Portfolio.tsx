import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "BIST Stock Analysis and Alert System",
    description: "A web-based, Python application utilizing Streamlit, yfinance, pandas, and MySQL for fundamental and technical stock analysis, live price tracking, and customizable email alerts with APScheduler.",
    technologies: ["Python", "TensorFlow", "Streamlit", "yfinance", "MySQL", "Pandas"],
    image: "/projects/stock-analysis.jpg",
    link: "https://github.com/Yigit033/bist_stock_analysis_and_alert_system"
  },
  {
    title: "Movie Recommender",
    description: "Developed a personalized movie recommendation system using Python and Pandas for data analysis. Implemented a machine learning model with Scikit-learn and TensorFlow. Visualizations were created using Matplotlib and Seaborn.",
    technologies: ["PyTorch", "Pandas", "Python", "TensorFlow", "Seaborn", "Matplotlib"],
    image: "/projects/movie-recommender.jpg",
    link: "https://github.com/Yigit033/movie-recommender"
  },
  {
    title: "AI-Powered Image,Video Processing System",
    description: "A Python 3.x application utilizing OpenCV, Tkinter, and scikit-learn for real-time image classification, model training, and prediction, leveraging linear SVM and GUI driven interactions.",
    technologies: ["Python", "OpenCV", "Tkinter", "Scikit-learn"],
    image: "/projects/image-processing.jpg",
    link: "https://github.com/Yigit033/AI-Powered-Image-Video-Processing-System"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative">
      <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
      <div className="relative z-10 p-8 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Featured Github Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}