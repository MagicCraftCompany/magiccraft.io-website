import { useEffect } from 'react';
import { sanityConfig } from '@/lib/sanity/config';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function SanityStudio() {
  // Redirect to the hosted Sanity Studio
  useEffect(() => {
    // Build the URL to your hosted Sanity Studio
    const studioUrl = `https://${sanityConfig.projectId}.sanity.studio/desk`;
    
    // Redirect to Sanity Studio after a short delay
    const timer = setTimeout(() => {
      window.location.href = studioUrl;
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-3xl font-bold">Redirecting to Admin Interface</h1>
          <p className="mb-8 text-gray-400">
            You're being redirected to the Sanity Studio admin interface...
          </p>
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 