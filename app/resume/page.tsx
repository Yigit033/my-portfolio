'use client';

import { Code, Heart, Award } from 'lucide-react';
import Education from '@/components/Education';

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Resume
          </h1>

          {/* Education & Certifications Section */}
          <Education />

          {/* Skills Section */}
          <section className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-4">Artificial Intelligence & Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'Docker', "Git (Github / Gitlab)", "Scikit-Learn", "Pandas, Numpy", "Matplotlib", "Seaborn", "Azure", "SQL", "Large Language Models (LLMs)", "Hugging Face", "Generative AI", "..."].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React','TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'WordPress'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Certificates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Miuul certified Python Programming for Data Science</h3>
                <p className="text-blue-400">Miuul</p>
                <p className="text-gray-400">2024</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">BTK Akademi certified Veri Bilimi için Python ve Tensorflow</h3>
                <p className="text-blue-400">BTK Akademi</p>
                <p className="text-gray-400">2024</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Miuul certified Microsoft Azure Fundamentals</h3>
                <p className="text-blue-400">Miuul</p>
                <p className="text-gray-400">2024</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Miuul certified Machine Learning</h3>
                <p className="text-blue-400">Miuul</p>
                <p className="text-gray-400">2024</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Turkcell certified Veri Bilimi ve Yapay Zekaya Giriş</h3>
                <p className="text-blue-400">Turkcell</p>
                <p className="text-gray-400">2024</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Technology and Innovation</h3>
                <p className="text-blue-400">Türk Traktör</p>
                <p className="text-gray-400">2023</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Pentesting - Turkcell Academy</h3>
                <p className="text-blue-400">Turkcell Academy</p>
                <p className="text-gray-400">2023</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Paramı Yönetebiliyorum - Habitat & Visa</h3>
                <p className="text-blue-400">Habitat & Visa</p>
                <p className="text-gray-400">2023</p>
              </div>
            </div>
          </section>

          {/* Volunteering Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Volunteering</h2>
            </div>
            <div className="space-y-6 mb-6">
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Istanbul Technical University Search and Rescue Team</h3>
                <p className="text-gray-400">2023 – Current</p>
                <p className="text-gray-300 mt-2">
                  I took part in various volunteer projects.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-800 bg-black/50">
                <h3 className="text-lg font-semibold text-white mb-2">Istanbul Technical University Volunteering Student Club</h3>
                <p className="text-gray-400">2023 – Current</p>
                <p className="text-gray-300 mt-2">
                  I took part in various volunteer projects.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p> {new Date().getFullYear()} © Yiğit Tilaver</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
