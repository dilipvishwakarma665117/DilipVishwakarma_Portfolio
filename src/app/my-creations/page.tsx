import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import CreationsHero from '@/components/sections/creations-hero';
import CreationsServices from '@/components/sections/creations-services';

export default function MyCreationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CreationsHero />
        <CreationsServices />
      </main>
      <Footer />
    </div>
  );
}
