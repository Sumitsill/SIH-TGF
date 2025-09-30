import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import UploadCase from "./pages/Upload";
import GamifiedSection from "./pages/GamefiedSection";
import { AuthProvider } from "./contexts/AuthContext";
import AuthWrapper from "./auth/AuthWrapper";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthWrapper>
          <Router>
            <div className="min-h-screen bg-slate-900">
              {/* <Navigation /> */}
              <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/upload" element={<UploadCase />} />
                <Route path="/gamified" element={<GamifiedSection />} />
              </Routes>
              </Layout>
            </div>
          </Router>
        </AuthWrapper>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
