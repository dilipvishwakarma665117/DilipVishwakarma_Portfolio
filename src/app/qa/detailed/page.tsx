import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import DetailedQaHero from '@/components/sections/detailed-qa-hero';
import DetailedQaList from '@/components/sections/detailed-qa-list';

export default function DetailedQAPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DetailedQaHero />
        <DetailedQaList />
      </main>
      <Footer />
    </div>
  );
}
