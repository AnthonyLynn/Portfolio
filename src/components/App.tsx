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
      <main className="w-full max-w-[640px] sm:py-5 flex flex-col gap-4 sm:gap-7 px-2">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};
