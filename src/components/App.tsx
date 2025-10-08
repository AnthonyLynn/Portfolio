import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";

export const App = ({}) => {
  return (
    <main className="bg-dark-primary-background min-h-screen">
      <Header />
      <About />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </main>
  );
};
