import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <h1 className="text-6xl font-bold text-white/70 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="px-4 py-2 bg-[#36185A] text-white rounded hover:bg-[#36185A]/90 transition-colors"
      >
        Go Home
      </a>
    </div>
  )
}

