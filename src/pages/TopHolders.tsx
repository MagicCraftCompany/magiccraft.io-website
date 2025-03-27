import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function TopHolders() {
  return (
    <div className="min-h-dvh w-full text-white">
      <Header />
      <main className="scroll-smooth pb-32">
        <section className="relative bg-gradient-to-b from-[#070725] to-[#0a0a2e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Top Holders</h1>
            {/* Add content here */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 