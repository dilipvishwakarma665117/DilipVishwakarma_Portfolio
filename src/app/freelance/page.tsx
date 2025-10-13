import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import FreelanceHero from '@/components/sections/freelance-hero';
import FreelanceServices from '@/components/sections/freelance-services';

export default function FreelancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FreelanceHero />
        <FreelanceServices />
      </main>
      <Footer />
    </div>
  );
}
