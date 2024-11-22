import { NewsSection } from "@/components/Cards/NewsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function NewsPage() {
  return (
    <div className="min-h-dvh w-full  text-white">
         <Header />
         <main className="scroll-smooth pb-32">
         <section className="relative px-4 py-12 md:px-6 lg:px-8">
     
    <NewsSection />
    
    </section>
      </main>
      <Footer />
    </div>
  )
}

