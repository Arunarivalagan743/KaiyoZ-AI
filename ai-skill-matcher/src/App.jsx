/**
 * AI Skill Matcher - Main App Component
 * Social impact web app connecting blue-collar workers with job opportunities
 */

import { useState } from 'react';
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  StatsSection,
  TestimonialsSection,
  CTASection,
  WorkersShowcase,
  JobsShowcase,
  ResumePreview,
  Footer
} from './components';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleGenerateResume = (worker) => {
    setSelectedWorker(worker);
    setShowResumePreview(true);
  };

  const handleCloseResume = () => {
    setShowResumePreview(false);
    setSelectedWorker(null);
  };

  const handleDownloadResume = () => {
    // In production, this would generate and download a PDF
    alert('Resume download started! (Demo)');
    handleCloseResume();
  };

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Workers Showcase */}
        <WorkersShowcase onGenerateResume={handleGenerateResume} />

        {/* Jobs Showcase */}
        <JobsShowcase />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview Modal */}
      {showResumePreview && (
        <ResumePreview 
          worker={selectedWorker}
          onDownload={handleDownloadResume}
          onClose={handleCloseResume}
        />
      )}
    </div>
  );
}

export default App;
