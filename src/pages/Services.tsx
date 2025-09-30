import React from 'react';
import { Search, Clock, Shield, FileText, Award } from 'lucide-react';
import ServiceCarousel from '../components/ServiceCarousel';

const Services: React.FC = () => {
  const services = [
    {
      id: 'realtime-detection',
      icon: <Search className="h-12 w-12" />,
      title: '📊 Real-Time Performance Detection',
      subtitle: 'AI-powered Fitness Assessment',
      description: 'Measure endurance, agility, and strength instantly. AI tracks every move with precision. 👉 Instant feedback, no waiting.',
      capabilities: [
        "Track speed, stamina, agility, and strength automatically",
        "Instant scoring with detailed performance metrics",
        "AI-powered body & motion recognition for accuracy"
      ],
      buttonText: 'Try Search',
      gradient: 'from-cyan-500 to-blue-500',
      hoverGradient: 'hover:from-cyan-600 hover:to-blue-600'
    },
    {
      id: 'authenticity',
      icon: <Clock className="h-12 w-12" />,
      title: '🕑 Authenticity & Video Verification',
      subtitle: 'ML-Verified Evidence Integrity',
      description: 'Every video is ML-verified for accuracy and fairness. 👉 No tampering. No doubts.',
      capabilities: [
        "Machine Learning checks for video authenticity",
      "Automatic detection of edited or manipulated footage",
      "Time-stamped evidence for transparent evaluation"
      ],
      buttonText: 'View Timeline',
      gradient: 'from-purple-500 to-indigo-500',
      hoverGradient: 'hover:from-purple-600 hover:to-indigo-600'
    },
    {
      id: 'anti-cheat',
      icon: <Shield className="h-12 w-12" />,
      title: '🛡 Anti-Cheat Suit',
      subtitle: '🛡️ AI Cheat Detection',
      description: 'Our AI flags manipulated videos and unfair practices. 👉 True talent shines, always.',
      capabilities: [
        "Detection of repeated attempts and fake submissions",
      "Flags use of external aids or manipulated environments",
      "Ensures equal opportunity for all participants"
      ],
      buttonText: 'Open Vault',
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'hover:from-green-600 hover:to-emerald-600'
    },
    {
      id: 'benchmarking',
      icon: <Award className="h-12 w-12" />,
      title: "🏅 Performance Benchmarking",
      subtitle: "AI-Driven Growth Insights",
      description: "Compare results with national benchmarks. 👉 Track growth & aim higher.",
      capabilities: [
        "Compare scores with state & national-level standards",
        "Progress tracking with historical performance data",
        "Personalized improvement suggestions powered by AI"
      ],
      gradient: 'from-orange-500 to-red-500',
      hoverGradient: 'hover:from-orange-600 hover:to-red-600'
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === "realtime-detection") {
    window.open("http://localhost:8000/realtime-detection/stream/", "_blank");
  } else {
    alert(`Opening ${serviceId} service. This will be implemented with actual functionality.`);
  }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">What We Offer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ⚡ Breaking Barriers in Talent Discovery
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <ServiceCarousel 
          services={services}
          onServiceClick={handleServiceClick}
          className="mb-16"
          showPagination={true}
          showNavigation={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        />

        {/* Footer Section */}
        <div className="text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Want a demo?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the future of sports talent assessment. Request a personalized demo to see our AI-powered platform in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Request Demo
              </a>
              {/* <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60">
                Contact Sales
              </button> */}
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-gray-500 text-sm mt-8">
            For forensic and investigative use only. All case data is securely encrypted and complies with legal requirements.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;