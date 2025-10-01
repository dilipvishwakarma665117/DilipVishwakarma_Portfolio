import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import QaHero from '@/components/sections/qa-hero';
import QaList from '@/components/sections/qa-list';

export default function QAPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <QaHero />
        <QaList />
      </main>
      <Footer />
    </div>
  );
}
