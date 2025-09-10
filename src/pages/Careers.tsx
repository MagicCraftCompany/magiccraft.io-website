import { Link } from 'react-router-dom'

function Careers() {
  return (
    <main className="safe-padded container mx-auto container-padding section-padding">
      <div className="mb-4">
        <Link to="/" className="chip-cta no-underline inline-flex items-center gap-2" aria-label="Back to Home">
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>
      <section className="mb-10">
        <h1 className="text-section-title">Careers at MagicCraft</h1>
        <p className="text-body-large max-w-3xl">
          We build fast with crypto-native DNA. If you live and breathe Web3, games,
          and AI - and you want to help ship products that move the market - join us.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card-glass card-padding card-hover-lift">
          <h3 className="text-card-title">Marketers</h3>
          <p className="text-body">
            Growth-focused operators who understand crypto, narratives, distribution,
            and performance. You can ship campaigns end to end and read on-chain signals.
          </p>
          <ul className="list-disc pl-6 text-body mb-4">
            <li>Channel strategy, influencer ops, partnerships</li>
            <li>Performance, analytics, conversion</li>
            <li>Community - X, Telegram, Discord</li>
          </ul>
          <a href="mailto:marketing@magiccraft.io?subject=Marketer%20Application" className="btn-primary no-underline">Apply</a>
        </div>

        <div className="card-glass card-padding card-hover-lift">
          <h3 className="text-card-title">Developers</h3>
          <p className="text-body">
            Full-stack, gameplay, and Web3 engineers who ship fast with high quality.
            You like sharp UX, clean abstractions, and measurable impact.
          </p>
          <ul className="list-disc pl-6 text-body mb-4">
            <li>React/TypeScript, Node, Vite, Tailwind</li>
            <li>Solidity or on-chain integrations a plus</li>
            <li>Game dev experience is great, not required</li>
          </ul>
          <a href="mailto:marketing@magiccraft.io?subject=Developer%20Application" className="btn-primary no-underline">Apply</a>
        </div>
      </section>

      <div className="section-divider" />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="highlight-box">
          <h4 className="mb-2">What we look for</h4>
          <ul className="list-disc pl-6 text-body">
            <li>Crypto-native - market aware and product minded</li>
            <li>AI-first workflows - leverage models to move faster</li>
            <li>Vibe coders - taste, speed, and delivery</li>
          </ul>
        </div>
        <div className="highlight-box">
          <h4 className="mb-2">Traits</h4>
          <ul className="list-disc pl-6 text-body">
            <li>Smart, fast, hardworking, and dedicated</li>
            <li>Positive, owner mindset, low ego</li>
            <li>Wants to build to change the world</li>
          </ul>
        </div>
        <div className="highlight-box">
          <h4 className="mb-2">How to apply</h4>
          <p className="text-body mb-3">Email your portfolio or shipped work. Links over CVs.</p>
          <div className="flex gap-3">
            <a href="mailto:marketing@magiccraft.io?subject=Careers" className="btn-secondary no-underline">Email</a>
            <Link to="/grants" className="btn-secondary no-underline">See Grants</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Careers


