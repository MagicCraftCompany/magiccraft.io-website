import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

function Careers() {
  return (
    <>
      <Header />
      <main className="safe-padded container-padding section-padding container mx-auto pb-16 md:pb-24">
        <Helmet>
          <title>Careers | MagicCraft</title>
          <meta
            name="description"
            content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
          />
          <link rel="canonical" href="https://magiccraft.io/careers" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://magiccraft.io/careers" />
          <meta property="og:title" content="Careers | MagicCraft" />
          <meta
            property="og:description"
            content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Careers | MagicCraft" />
          <meta
            name="twitter:description"
            content="Join the MagicCraft team. Explore open roles in game development, AI, and Web3 across the MagicCraft ecosystem."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
          />
        </Helmet>
        <div className="mb-6 md:mb-8">
          <Link
            to="/"
            className="chip-cta inline-flex items-center gap-2 no-underline transition-transform duration-300 hover:-translate-x-1 hover:bg-white/15"
            aria-label="Back to Home"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
        <section className="mb-10">
          <h1 className="text-section-title">Careers at MagicCraft</h1>
          <p className="text-body-large max-w-3xl">
            We build fast with crypto-native DNA. If you live and breathe Web3,
            games, and AI - and you want to help ship products that move the
            market - join us.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="card-glass card-padding card-hover-lift">
            <h3 className="text-card-title">Marketers</h3>
            <p className="text-body">
              Growth-focused operators who understand crypto, narratives,
              distribution, and performance. You can ship campaigns end to end
              and read on-chain signals.
            </p>
            <ul className="text-body mb-4 list-disc pl-6">
              <li>Channel strategy, influencer ops, partnerships</li>
              <li>Performance, analytics, conversion</li>
              <li>Community - X, Telegram, Discord</li>
            </ul>
            <a
              href="mailto:contact@magiccraft.io?subject=Marketer%20Application"
              className="btn-primary no-underline transition-all duration-300 hover:scale-105"
            >
              Apply
            </a>
          </div>

          <div className="card-glass card-padding card-hover-lift">
            <h3 className="text-card-title">Developers</h3>
            <p className="text-body">
              Full-stack, gameplay, and Web3 engineers who ship fast with high
              quality. You like sharp UX, clean abstractions, and measurable
              impact.
            </p>
            <ul className="text-body mb-4 list-disc pl-6">
              <li>React/TypeScript, Node, Vite, Tailwind</li>
              <li>Solidity or on-chain integrations a plus</li>
              <li>Game dev experience is great, not required</li>
            </ul>
            <a
              href="mailto:contact@magiccraft.io?subject=Developer%20Application"
              className="btn-primary no-underline transition-all duration-300 hover:scale-105"
            >
              Apply
            </a>
          </div>
        </section>

        <div className="section-divider" />

        <section className="grid gap-6 md:grid-cols-3">
          <div className="highlight-box">
            <h4 className="mb-2">What we look for</h4>
            <ul className="text-body list-disc pl-6">
              <li>Crypto-native - market aware and product minded</li>
              <li>AI-first workflows - leverage models to move faster</li>
              <li>Vibe coders - taste, speed, and delivery</li>
            </ul>
          </div>
          <div className="highlight-box">
            <h4 className="mb-2">Traits</h4>
            <ul className="text-body list-disc pl-6">
              <li>Smart, fast, hardworking, and dedicated</li>
              <li>Positive, owner mindset, low ego</li>
              <li>Wants to build to change the world</li>
            </ul>
          </div>
          <div className="highlight-box">
            <h4 className="mb-2">How to apply</h4>
            <p className="text-body mb-3">
              Email your portfolio or shipped work. Links over CVs.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:contact@magiccraft.io?subject=Careers"
                className="btn-secondary no-underline transition-all duration-300 hover:scale-105"
              >
                Email
              </a>
              <Link
                to="/grants"
                className="btn-secondary no-underline transition-all duration-300 hover:scale-105"
              >
                See Grants
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Careers
