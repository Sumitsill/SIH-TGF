// import React from 'react';
// import { motion } from 'framer-motion';
// import { Trophy, TrendingUp, Flame, Award, Target, Zap } from 'lucide-react';

// const GamifiedSection = () => {
//   const features = [
//     {
//       icon: Trophy,
//       title: "🏆 Earn Badges",
//       description: "Unlock achievements for completing challenges, improving performance, and reaching milestones.",
//       gradient: "from-yellow-400 to-orange-500",
//       bgGradient: "from-yellow-50 to-orange-50",
//     },
//     {
//       icon: TrendingUp,
//       title: "📊 Climb Leaderboards",
//       description: "Compete with athletes nationwide and see where you rank in different sports categories.",
//       gradient: "from-blue-400 to-purple-500",
//       bgGradient: "from-blue-50 to-purple-50",
//     },
//     {
//       icon: Flame,
//       title: "🔥 Track Progress",
//       description: "Monitor your improvement over time with detailed analytics and personalized insights.",
//       gradient: "from-red-400 to-pink-500",
//       bgGradient: "from-red-50 to-pink-50",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             🔥 Gamify Your Growth –{' '}
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Because Training Should Feel Like Winning
//             </span>
//           </motion.h2>
//           <motion.p
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Hard work = Rewards. Turn your training into an adventure with badges, streaks, and leaderboards.
//           </motion.p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br ${feature.bgGradient} border border-white/20`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//               >
//                 {/* Animated Background */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-2xl`}></div>
//                 </div>

//                 {/* Icon */}
//                 <motion.div
//                   className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 relative z-10`}
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <Icon className="h-8 w-8 text-white" />
//                 </motion.div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Hover Effect Icons */}
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                   <div className="flex space-x-1">
//                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
//                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animation-delay-100`}></div>
//                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animation-delay-200`}></div>
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <motion.button
//                   className={`mt-6 px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 relative z-10 opacity-0 group-hover:opacity-100`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ y: 20 }}
//                   whileInView={{ y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.5 }}
//                 >
//                   Get Started
//                 </motion.button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <motion.button
//             className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="flex items-center space-x-2">
//               <Zap className="h-5 w-5" />
//               <span>Start Your Journey</span>
//             </span>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default GamifiedSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Flame, Award, Target, Zap, Star, Crown, Medal } from 'lucide-react';

const GamifiedSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "🏆 Earn Badges",
      description: "Unlock achievements for completing challenges, improving performance, and reaching milestones. Collect rare badges and showcase your dedication.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      decorativeIcons: [Crown, Medal, Star],
      stats: "50+ Unique Badges",
      highlight: "Achievement Hunter"
    },
    {
      icon: TrendingUp,
      title: "📊 Climb Leaderboards",
      description: "Compete with athletes nationwide and see where you rank in different sports categories. Rise through the ranks and claim your spot at the top.",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      decorativeIcons: [Target, Award, Crown],
      stats: "National Rankings",
      highlight: "Top Performer"
    },
    {
      icon: Flame,
      title: "🔥 Track Progress",
      description: "Monitor your improvement over time with detailed analytics and personalized insights. Watch your skills evolve with comprehensive performance tracking.",
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      decorativeIcons: [Zap, Star, Target],
      stats: "Real-time Analytics",
      highlight: "Progress Master"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Flame className="h-10 w-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🔥 Gamify Your Growth –{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Because Training Should Feel Like Winning
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hard work = Rewards. Turn your training into an epic adventure with badges, streaks, and leaderboards. 
            Every rep counts, every milestone matters.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 rounded-3xl`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} rounded-3xl`}></div>
                </div>

                {/* Decorative Icons */}
                <div className="absolute top-4 right-4 flex space-x-1 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {feature.decorativeIcons.map((DecorIcon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3 + iconIndex,
                        repeat: Infinity,
                        delay: iconIndex * 0.5
                      }}
                    >
                      <DecorIcon className="h-3 w-3 text-white" />
                    </motion.div>
                  ))}
                </div>

                {/* Main Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 relative z-10 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-10 w-10 text-white" />
                  
                  {/* Pulsing Ring */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} animate-ping opacity-20`}></div>
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-xs font-semibold mb-4 opacity-80`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.stats}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mb-4`}></div>
                  
                  <p className="text-blue-200 text-lg leading-relaxed group-hover:text-blue-100 transition-colors mb-4">
                    {feature.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">{feature.highlight}</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className={`mt-6 w-full px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  Start Journey
                </motion.button>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-20`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-6 w-6 group-hover:animate-bounce" />
            <span>Start Your Epic Journey</span>
            <div className="flex space-x-1">
              <Star className="h-4 w-4 animate-pulse" />
              <Star className="h-4 w-4 animate-pulse animation-delay-100" />
              <Star className="h-4 w-4 animate-pulse animation-delay-200" />
            </div>
          </motion.div>
          
          <motion.p
            className="mt-4 text-blue-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join thousands of athletes already leveling up their game
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GamifiedSection;