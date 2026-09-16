import { usePortfolio } from './hooks/usePortfolio';
import { Navbar } from './components/Navbar';
import { GridLines } from './components/GridLines';
import { Hero } from './sections/Hero';
import { Portrait } from './sections/Portrait';
import { Tools } from './sections/Tools';
import { Services } from './sections/Services';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  const { data, error, loading } = usePortfolio();

  if (loading) return <div className="loader" aria-busy="true"><span /></div>;
  if (error) return <p className="fatal">No se pudo cargar el contenido.</p>;

  const { profile, tools, services, projects, experience, education, portrait, navigation, socialLinks } = data;

  return (
    <div className="page">
      <GridLines />
      <Navbar links={navigation} />
      <main>
        <Hero profile={profile} />
        <Portrait portrait={portrait} />
        <Tools tools={tools} profile={profile} />
        <Services services={services} />
        <Experience items={experience} education={education} />
        <Work projects={projects} />
        <Contact />
      </main>
      <Footer profile={profile} navigation={navigation} socialLinks={socialLinks} />
    </div>
  );
}
