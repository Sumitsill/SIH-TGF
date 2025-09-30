import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { Search, BookOpen, Play } from 'lucide-react';
import VoiceAssistant from "../components/voice assistance";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section with Spline Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          

 {<Spline scene="https://prod.spline.design/Cxbvez7u-HVn6XOW/scene.splinecode" /> }
 

        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Pratidwandhi
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Democratizing Sports Talent Assessment with the power of
              <span className="text-cyan-400 font-semibold"> AI</span>, 
              <span className="text-blue-400 font-semibold"> Sports</span>, and 
              <span className="text-green-400 font-semibold"> Assessment</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/services"
                className="group flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <Search className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>🔍 Try Demo</span>
              </Link>
              
              <Link
                to="/gamified"
                className="group flex items-center space-x-3 bg-slate-700/50 hover:bg-slate-600/50 text-white border-2 border-cyan-400/50 hover:border-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
              >
                <BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>📖 Gamify</span>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-cyan-400 text-3xl mb-3">🔍</div>
                <h3 className="text-white font-semibold text-lg mb-2">🧠 AI-Powered Talent Evaluation</h3>
                <p className="text-gray-300 text-sm">Objective fitness & skill analysis using computer vision and AI models.</p>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-blue-400 text-3xl mb-3">⚡</div>
                <h3 className="text-white font-semibold text-lg mb-2">⚡ Scalable & Accessible</h3>
                <p className="text-gray-300 text-sm">Assess athletes anytime, anywhere with just a mobile device—breaking geographical barriers.</p>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
                <div className="text-green-400 text-3xl mb-3">🛡️</div>
                <h3 className="text-white font-semibold text-lg mb-2">🔒 Fair & Transparent</h3>
                <p className="text-gray-300 text-sm">Standardized tests with real-time scoring ensure equal opportunity for every aspiring athlete.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        <VoiceAssistant />
      </div>
    </div>
  );
};

export default Home;