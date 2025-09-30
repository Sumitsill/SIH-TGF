"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Users, ShieldCheck, Eye, EyeOff, Upload } from "lucide-react";

export default function AthleteLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Normally you'd check credentials here
    // For demo, let's assume login is always successful
    navigate("/home"); // redirect to original website
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-indigo-900 relative overflow-hidden">
      {/* Card */}
      <div className="w-full max-w-md bg-gradient-to-b from-blue-800/80 to-blue-900/90 p-8 rounded-2xl shadow-2xl relative z-10">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Trophy className="h-10 w-10 text-yellow-400" />
          <h1 className="text-2xl font-bold text-white">
            Pratidwandhi <span className="text-yellow-400">🏅</span>
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Academy */}
          <div>
            <label className="block text-sm text-blue-200 mb-1">
              🏟️ Academy / Training Center
            </label>
            <select className="w-full px-4 py-2 rounded-lg bg-blue-950 text-blue-100 border border-blue-700 focus:ring-2 focus:ring-cyan-400 outline-none">
              <option>Select your academy</option>
              <option>Sports Authority of India</option>
              <option>State Academy</option>
              <option>School / College</option>
              <option>Private Academy</option>
            </select>
          </div>

          {/* Athlete ID */}
          <div>
            <label className="block text-sm text-blue-200 mb-1">
              🎫 Athlete ID / Registration No.
            </label>
            <input
              type="text"
              placeholder="Enter your athlete ID"
              className="w-full px-4 py-2 rounded-lg bg-blue-950 text-blue-100 border border-blue-700 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-blue-200 mb-1">
              🔑 Secure PIN / Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-blue-950 text-blue-100 border border-blue-700 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-blue-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Fair Play Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500 text-yellow-400 text-sm rounded-lg p-3 flex items-start space-x-2">
            <ShieldCheck className="h-5 w-5 mt-0.5" />
            <p>
              <span className="font-semibold">Fair Play Protocol:</span> Every
              login is secured. Only verified athletes, coaches, and officials
              can access results.
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-600 hover:to-blue-600 transition"
          >
            🏃 Enter Arena
          </button>
        </form>
      </div>
    </div>
  );
}
