import { Target, Trophy, Zap } from 'lucide-react'
import React from 'react'

function FeatureSection() {
  return (
    <div>
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Power Your Brand
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform delivers everything you need to
              dominate the eSports landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all transform hover:scale-105">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Tournament Hosting
              </h3>
              <p className="text-gray-300 mb-4">
                Professional tournament management with custom brackets,
                real-time scoring, and seamless streaming integration.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Custom tournament brackets</li>
                <li>• Real-time analytics dashboard</li>
                <li>• Automated prize distribution</li>
                <li>• Multi-platform streaming</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Live Production
              </h3>
              <p className="text-gray-300 mb-4">
                Broadcast-quality streaming with professional overlays, sponsor
                integration, and interactive features.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Professional streaming setup</li>
                <li>• Custom overlays & graphics</li>
                <li>• Sponsor logo integration</li>
                <li>• Interactive chat features</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-pink-400 transition-all transform hover:scale-105">
              <div className="bg-gradient-to-r from-pink-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">
                Brand Amplification
              </h3>
              <p className="text-gray-300 mb-4">
                Maximize your reach with targeted audience engagement and
                comprehensive marketing packages.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Targeted audience reach</li>
                <li>• Social media campaigns</li>
                <li>• Influencer partnerships</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeatureSection
