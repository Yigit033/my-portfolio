import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Yiğit Tilaver
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Bachelor - Istanbul Technical University
        </p>
        <p className="text-gray-400 max-w-2xl">
          A student and a passionate enthusiast of Artificial Intelligence / Machine Learning / Deep Learning / Data Science.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-center"
          >
            View My Work
          </a>
          <div className="flex items-center gap-4 px-6 py-3 border border-gray-600 rounded-lg">
            <a
              href="https://github.com/Yigit033"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <div className="h-6 w-px bg-gray-600"></div>
            <a
              href="https://www.linkedin.com/in/yigittilaver/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <div className="h-6 w-px bg-gray-600"></div>
            <a
              href="mailto:yigittilaver2000@gmail.com"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-teal-400/40 blur-2xl"></div>
        
        {/* Inner shadow container */}
        <div className="relative w-full h-full rounded-full">
          {/* Shadow effect */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 blur-lg"></div>
          
          {/* Image container with border */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/80 shadow-lg shadow-black/50">
            <Image
              src="/projects/profile-photo.jpg"
              alt="Yiğit Tilaver"
              fill
              className="object-cover"
              priority
              quality={95}
              sizes="(max-width: 768px) 256px, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
