import { About } from "../components/About";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";

export default function Home() {
  return (
    <main className="w-full md:max-w-180 pb-22 lg:pb-4 px-3 sm:px-4 md:px-0 flex flex-col gap-4 sm:gap-7 sm:pt-4">
      <About />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
    </main>
  );
}
