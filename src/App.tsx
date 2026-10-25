import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DEFAULT_NETLIFY_SUBDOMAIN } from './data/portfolioData';

export default function App() {
  const [subdomain, setSubdomain] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('javhaa_netlify_subdomain');
      if (saved && saved.trim() && saved !== 'javhaajk793') return saved.trim();
    } catch {
      // ignore
    }
    return DEFAULT_NETLIFY_SUBDOMAIN;
  });

  const handleSubdomainChange = (newSub: string) => {
    setSubdomain(newSub);
    try {
      localStorage.setItem('javhaa_netlify_subdomain', newSub);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navigation */}
      <Header subdomain={subdomain} onSubdomainChange={handleSubdomainChange} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero subdomain={subdomain} />

        {/* Projects Section (Core requirement: 4 projects array with new window links) */}
        <ProjectsSection subdomain={subdomain} />

        {/* About Me Section (Age 13, Bio, Hobbies, Goals) */}
        <AboutSection />

        {/* Tech Skills Section */}
        <SkillsSection />

        {/* Contact & Guest Message Board */}
        <ContactSection subdomain={subdomain} />
      </main>

      {/* Footer */}
      <Footer subdomain={subdomain} />
    </div>
  );
}
