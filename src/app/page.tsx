import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Achievements from '@/components/sections/achievements';
import Freelance from '@/components/sections/freelance';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
