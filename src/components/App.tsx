import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";

export const App = ({}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Header />
      <main className="w-[640px] pb-8 flex flex-col gap-7">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};
