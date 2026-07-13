import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function NotFound() {
  return (
    <div className="min-h-dvh w-full text-white">
      <Helmet>
        <title>404 - Page Not Found | MagicCraft</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-white/70">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="mb-8 text-white/65">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="rounded bg-[#36185A] px-4 py-2 text-white transition-colors hover:bg-[#36185A]/90"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
