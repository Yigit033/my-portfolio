import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import JsonLd from '../components/JsonLd'

export default function Home() {
  return (
    <div className="space-y-24">
      <JsonLd />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p> {new Date().getFullYear()} © Yiğit Tilaver</p>
          </div>
        </div>
      </footer>
    </div>
  )
}