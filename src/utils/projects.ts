import MakeASharkScreenshot from "../images/MakeASharkScreenshot.jpg";
import NewsAppScreenshot from "../images/NewsAppScreenshot.png";
import LoverCodeJamzScreenshot from "../images/LoverCodeJamzScreenshot.jpg";
import ReactionRunawayScreenshot from "../images/ReactionRunawayScreenshot.png";
import SpellCodingScreenshot from "../images/SpellCodingScreenshot.png";

interface Project {
  image: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink?: string;
  demoLink?: string;
  gitHubLink?: string;
}

export const projects: Project[] = [
  {
    image: MakeASharkScreenshot,
    title: "Make a Shark",
    description:
      "Interactive educational application that teaches young users about sharks and their habitats.",
    skills: ["React", "TypeScript", "Vitest", "Storybook"],
    websiteLink: "https://d2iglzmdn49e7r.cloudfront.net",
  },
  {
    image: NewsAppScreenshot,
    title: "News Explorer",
    description:
      "Website allowing users to find an endless amount of current news articles using user entered keywords. Additionally allows for the saving of these articles for later reading.",
    skills: ["React", "JavaScript", "News API"],
    websiteLink: "https://anthonylynn.github.io/NewsApp",
    demoLink: "https://youtu.be/_pOs_k1a9pI",
    gitHubLink: "https://github.com/AnthonyLynn/NewsApp",
  },
  {
    image: LoverCodeJamzScreenshot,
    title: "Lovers Code Jamz",
    description:
      "Website for planning the perfect date made for a 5 day team competition. Developed the restaurant carousel listing top 100 restaurants in the US, ordered by distance form user. Won 1st in design, presentation, and technical execution.",
    skills: ["HTML5", "JavaScript", "CSS3"],
    websiteLink: "https://jmik-thang.github.io/Lover-s-Slow-Jamz/",
    demoLink: "https://youtu.be/EM-qUf7j-ak",
    gitHubLink: "https://github.com/JMIK-THANG/Lover-s-Slow-Jamz",
  },
  {
    image: ReactionRunawayScreenshot,
    title: "Reaction Runaway",
    description:
      "Game made in a 3.5 day game jam for the 2023 Roblox Developer Challenge. Features a user controlled player that can shoot electricity to solve puzzles.",
    skills: ["Roblox Studio", "Luau"],
    websiteLink: "https://www.roblox.com/games/12812459785/Reaction-Runaway",
    demoLink: "https://youtu.be/jt19Wdh4IlE",
  },
  {
    image: SpellCodingScreenshot,
    title: "Spell Coding",
    description:
      "Commission project showcasing 25 different spells from the Harry Potter Series. Made UI functional, projectiles and their functional effects, and other small things like the hit cursor.",
    skills: ["Roblox Studio", "Luau"],
    websiteLink: "https://www.roblox.com/games/12707118089/SpellCoding",
    demoLink: "https://youtu.be/GUmZ-yoSqIs",
  },
];
