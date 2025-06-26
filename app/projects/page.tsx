import {Github, ExternalLink} from 'lucide-react';
import Image from 'next/image';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const allProjects: ProjectItem[] = [
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
    technologies: ["PyTorch", "Pandas", "Numpy", "Matplotlib", "Python", "TensorFlow", "Seaborn",],
    image: "/projects/movie-recommender.jpg",
    link: "https://github.com/Yigit033/movie-recommender"
  },
  {
    title: "AI-Powered Image & Video Processing System",
    description: "A Python 3.x application utilizing OpenCV, Tkinter, and scikit-learn for real-time image classification, model training, and prediction, leveraging linear SVM and GUI driven interactions.",
    technologies: ["Python", "OpenCV", "Tkinter", "Scikit-learn"],
    image: "/projects/image-processing.jpg",
    link: "https://github.com/Yigit033/AI-Powered-Image-Video-Processing-System"
  },
  {
    title: "ML Diabetes Pipeline",
    description: "A Python-based, diabetes prediction pipeline leveraging Scikit-learn, Pandas, and Numpy for data preprocessing, machine learning model training, and evaluation, utilizing various ML algorithms for accurate predictions.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Scikit-learn", "ML Algorithms"],
    image: "/projects/diabestes.jpg",
    link: "https://github.com/Yigit033/diabetes_ML_pipeline"
  },
  {
    title: "Top Spotify Podcast Episodes",
    description: "This project analyzes Spotify's top podcasts using Python, employing technologies like CatBoost for regression, along with NumPy, Pandas, and SHAP for data processing and model interpretation.",
    technologies: ["Python", "CatBoost", "Pandas", "Numpy", "Matplotlib", "SHAP", "Scikit-Learn"],
    image: "/projects/spotify.jpg",
    link: "https://github.com/Yigit033/top_spotify_podcast_episodes"
  },
  {
    title: "Voice-Controlled Weather Assistant",
    description: "The project is a voice assistant built with Python, utilizing SpeechRecognition, gTTS, and spaCy for natural language processing, providing real-time weather updates via an external API.",
    technologies: ["Python", "SpeechRecognition", "gTTS", "spaCy", "Python-Weather-API"],
    image: "/projects/weather.jpg",
    link: "https://github.com/Yigit033/voice_assistant"
  },
  {
    title: "Financial AI Assistant",
    description: "The project focuses on developing a financial AI assistant using Python, incorporating machine learning techniques to answer financial queries and provide insights into financial markets for user decision-making.",
    technologies: ["Python", "TensorFlow", "mplfinance ", "Pandas", "Neuralintents", "Matplotlib"],
    image: "/projects/finance.jpg",
    link: "https://github.com/Yigit033/financial-ai-assistant"
  },
  {
    title: "Stock Assistant with NLP",
    description: "The project leverages Python, YFinance, and Hugging Face for stock data analysis and recommendations, utilizing natural language processing techniques to enhance stock assistant functionalities.",
    technologies: ["Python", "yfinance", "Hugging Face", "Scikit-learn", "NLTK"],
    image: "/projects/stock.jpg",
    link: "https://github.com/Yigit033/stock_assistants_with_NLP"
  },
  {
    title: "Matematik Macerası",
    description: "For kids: • Fun math games • Cute characters • Daily tasks • And many more great features..",
    technologies: ["Kotlin", "Android Studio", "Java"],
    image: "/projects/matematik_macerası.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.yigit033.matematikmacarasi"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          My Projects
        </h1>
        
        <div className="mb-8">
          <a 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

        <div className="space-y-10">
          {allProjects.map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/Yigit033"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Explore All Projects on GitHub
          </a>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>{new Date().getFullYear()} &copy; Yiğit Tilaver</p>
          </div>
        </div>
      </footer>
    </div>
  );
}