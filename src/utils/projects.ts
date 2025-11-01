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
      "Educational app featuring sharks; made for an externship with 6 other developers using Agile.",
    skills: ["React.js", "TypeScript", "Vitest", "Storybook"],
    websiteLink: "https://d2iglzmdn49e7r.cloudfront.net",
  },
  {
    image: NewsAppScreenshot,
    title: "News Explorer",
    description:
      "Front-end news site using React and JavaScript to search and save news articles.",
    skills: ["React.js", "JavaScript", "News API"],
    websiteLink: "https://anthonylynn.github.io/NewsApp",
    demoLink: "https://youtu.be/_pOs_k1a9pI",
    gitHubLink: "https://github.com/AnthonyLynn/NewsApp",
  },
  {
    image: LoverCodeJamzScreenshot,
    title: "Lovers Code Jamz",
    description:
      "Front-end site where I built a carousel of popular restaurants to visit.",
    skills: ["HTML5", "JavaScript", "CSS3"],
    websiteLink: "https://jmik-thang.github.io/Lover-s-Slow-Jamz/",
    demoLink: "https://youtu.be/EM-qUf7j-ak",
    gitHubLink: "https://github.com/JMIK-THANG/Lover-s-Slow-Jamz",
  },
  {
    image: ReactionRunawayScreenshot,
    title: "Reaction Runaway",
    description:
      "Game made in a 3.5 day game jam for the Roblox Developer Challenge 2023.",
    skills: ["Roblox Studio", "Luau"],
    websiteLink: "https://www.roblox.com/games/12812459785/Reaction-Runaway",
    demoLink: "https://youtu.be/jt19Wdh4IlE",
  },
  {
    image: SpellCodingScreenshot,
    title: "Spell Coding",
    description:
      "Commission project showcasing 25 different spells from the Harry Potter Series. UI design not made by me, but I did make it functional.",
    skills: ["Roblox Studio", "Luau"],
    websiteLink: "https://www.roblox.com/games/12707118089/SpellCoding",
    demoLink: "https://youtu.be/GUmZ-yoSqIs",
  },
];
