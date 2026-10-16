import { FaBullhorn, FaLightbulb, FaRegPlayCircle } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";

import ServiceLanding from "../components/ServiceLanding";
import { heroImages } from "../components/siteData";

const page = {
  eyebrow: "Commercial Films",
  title: "Make Every Second Matter",
  subtitle:
    "Brand films and campaigns with a clear point of view—made to earn attention, spark feeling and stay remembered.",
  image: heroImages.work,
  introEyebrow: "For brands with a story",
  introTitle: "Big ideas, made impossible to ignore.",
  introText:
    "We bring creative thinking and production craft together to make films that feel unmistakably yours. From a first spark to the final deliverables, the idea stays at the centre of every decision.",
  pullQuote: "A good campaign gets noticed. A great story gets remembered.",
  frameIds: [2, 6, 5],
  sequence: {
    kicker: "The campaign cut",
    title: "One idea. A hundred ways to feel it.",
    description:
      "Product films, social-first stories and campaign hero pieces—all crafted with the same care for the message and the people watching.",
  },
  capabilitiesEyebrow: "Commercial craft",
  capabilitiesTitle: "Made to move people",
  capabilitiesSubtitle:
    "Creative and production working as one, from the first brief to the final screen.",
  capabilities: [
    { icon: FaLightbulb, title: "Concept & treatment", text: "A distinctive creative direction grounded in your brand, audience and ambition." },
    { icon: FaBullhorn, title: "Brand storytelling", text: "A clear, human story that makes the why behind your brand easy to feel." },
    { icon: FaClapperboard, title: "Full production", text: "Casting, locations, crew and shoot logistics managed with care from end to end." },
    { icon: FaRegPlayCircle, title: "Campaign deliverables", text: "Flexible edits and formats designed for the places your audience actually watches." },
  ],
  projectIds: [2, 6],
  workEyebrow: "Brand stories",
  workTitle: "A little work, a lot of feeling",
  workSubtitle: "Commercial projects made to give an idea a life beyond the brief.",
  processTitle: "From brief to buzz",
  processSubtitle: "A focused, collaborative journey that protects the big idea while taking care of every detail.",
  process: [
    { title: "Get to the heart", text: "We get close to your brand, audience and goals, then find the story worth telling." },
    { title: "Make it real", text: "We develop the concept, build the right team and produce a polished, purposeful shoot." },
    { title: "Put it to work", text: "We edit, finish and adapt your film for each platform and audience." },
  ],
  ctaTitle: "Have a good story for your brand?",
  ctaText: "Let's turn it into a film people choose to watch—and remember.",
};

export default function Commercial() {
  return <ServiceLanding page={page} />;
}
