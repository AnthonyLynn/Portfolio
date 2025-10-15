import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";

export const App = ({}) => {
  return (
    <>
      <Header />
      <main className="w-[640px] pt-[42px] flex flex-col gap-7">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
};
