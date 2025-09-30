import React from 'react';
import { Shield, Users, Award, Target, CheckCircle, Globe, Activity, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
     { number: '10,000+', label: 'Athletes Assessed', icon: <Users className="h-6 w-6" /> },
     { number: '500+', label: 'Verified Performance Videos', icon: <Activity className="h-6 w-6" /> },
     { number: '95%', label: 'AI Verification Accuracy', icon: <Trophy className="h-6 w-6" /> },
     { number: 'Across India', label: 'Accessible Anywhere', icon: <Globe className="h-6 w-6" /> }
  ];

  const features = [
    '📊 AI-Based Performance Tracking → Accurate detection of jumps, runs, sit-ups.',
    '🎥 On-Device Video Verification → No tampering, no cheating.',
    '🛡️AI Cheat Detection → Ensuring fair play always',
    '🏅 Benchmarking System → Compare performance across age & gender groups.',
    '🎮 Gamified Experience → Badges, leaderboards, streaks, achievements.',
    '📡 Low-Bandwidth Support → Works even on entry-level smartphones.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Pratidwandhi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every athlete deserves a fair shot at recognition
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="h-8 w-8 text-red-400" />
              <h2 className="text-3xl font-bold text-white">The Challenge We Solve</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  ⚡ India has the youngest population in the world, with a rich pool of untapped sports talent. However, traditional evaluation methods are expensive, location-bound, and resource-heavy. The Sports Authority of India (SAI) and other bodies face challenges in reaching every corner of the country.

                
                </p>
                
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">The Problem</h3>
                <p className="text-gray-300 leading-relaxed">
                 Lack of access to proper sports infrastructure in rural & semi-urban areas.

                 Bias and subjectivity in manual talent scouting.

                 High cost of evaluations discouraging grassroots athletes.

                 Athletes missing out on recognition despite having real talent.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Solution</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  🤖 Using AI-powered video verification, athletes can now record their fitness assessments directly on their smartphones.
                  ✅ The app ensures fair, authentic, and accurate performance tracking.
                  ✅ Verified data is securely sent to official servers for profiling.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Capabilities:</h4>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by <span className="text-cyan-400">Sports Authority</span> India
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
              <Target className="h-6 w-6 text-cyan-400" />
              <span>Our Mission</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              🚀 To build an AI-driven, low-cost, accessible sports evaluation platform that:

              Encourages grassroots participation

              Provides unbiased athlete profiling

              Motivates athletes with gamified growth tools

              Empowers authorities with authentic talent data
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
              <Award className="h-6 w-6 text-blue-400" />
              <span>Our Vision</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
             🌍 “To democratize sports talent assessment, ensuring every athlete, from every corner of India, gets a fair chance to shine.”
            </p>
          </div>
        </div>

        {/* Team Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-gray-400">Every feature is built with security and privacy at its core, ensuring evidence integrity.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">User-Centric</h3>
              <p className="text-gray-400">Designed by investigators, for investigators - intuitive interfaces that just work.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">Continuous innovation and improvement to deliver best-in-class forensic solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;