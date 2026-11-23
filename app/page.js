import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Guarantees from '@/components/Guarantees';
import Deals from '@/components/Deals';
import Categories from '@/components/Categories';
import FeaturedCollections from '@/components/FeaturedCollections';
import BestSellers from '@/components/BestSellers';
import Reviews from '@/components/Reviews';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Guarantees />
        <Deals />
        <Categories />
        <FeaturedCollections />
        <BestSellers />
        <Reviews />
        <Brands />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
