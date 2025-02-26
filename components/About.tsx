import { Mail, Calendar, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
      <div className="relative z-10 p-8 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              I am a passionate AI & Machine Learning Engineer with a strong foundation in both theoretical and practical aspects of artificial intelligence. My journey in tech has been driven by a desire to create intelligent solutions that make a real impact.
            </p>
            <p className="text-gray-300">
              With expertise in Python, TensorFlow, and PyTorch, I specialize in developing cutting-edge AI solutions. I'm particularly interested in natural language processing and computer vision applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:yigittilaver2000@gmail.com" className="hover:text-blue-400 transition-colors">
                    yigittilaver2000@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>January 1, 2001</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Istanbul, Turkey</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+901234567890" className="hover:text-blue-400 transition-colors">
                    +90 505 0** ****
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}