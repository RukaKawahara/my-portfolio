/* メインページ - シングルページスクロール */
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Qualifications from '@/components/Qualifications';
import Hobby from '@/components/Hobby';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Qualifications />
        <Hobby />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
