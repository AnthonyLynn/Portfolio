import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";

export const App = ({}) => {
  return (
    <main className="relative -z-100 bg-dark-primary-background min-h-screen flex flex-col gap-[20px] items-center">
      <Header />
      <div className="w-[640px] pt-[42px]">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
};
