import { FaClapperboard, FaFilm, FaHeadphones, FaWandMagicSparkles } from "react-icons/fa6";

import ServiceLanding from "../components/ServiceLanding";
import { heroImages } from "../components/siteData";

const page = {
  eyebrow: "Production & Post",
  title: "From First Idea to Final Cut",
  subtitle:
    "A steady creative partner behind the scenes, bringing every moving part of your production together.",
  image: heroImages.contact,
  introEyebrow: "The whole picture",
  introTitle: "Good stories need a crew that cares.",
  introText:
    "We make the complex feel considered. Our producers, directors and post team work in step to keep the details moving, the creative intact and the final film looking and sounding its best.",
  pullQuote: "One connected team. One clear vision. Nothing lost between idea and edit.",
  frameIds: [7, 2, 4],
  sequence: {
    kicker: "Behind every frame",
    title: "The moving parts, moving together.",
    description:
      "From a thoughtful plan to a beautifully finished film, our in-house team keeps the craft and communication connected at every handoff.",
  },
  capabilitiesEyebrow: "Production services",
  capabilitiesTitle: "All the details, in good hands",
  capabilitiesSubtitle:
    "A joined-up production and post workflow, with the right people looking after every stage.",
  capabilities: [
    { icon: FaClapperboard, title: "Pre-production", text: "Scheduling, budgeting, casting, locations and a clear plan for shoot day." },
    { icon: FaFilm, title: "On-set production", text: "A well-run set, experienced crew and calm coordination from first call to wrap." },
    { icon: FaWandMagicSparkles, title: "Edit & colour", text: "A considered edit and polished grade that bring the original vision into focus." },
    { icon: FaHeadphones, title: "Sound & delivery", text: "Sound design, mix and platform-ready exports, finished to the right specification." },
  ],
  projectIds: [7, 2, 4],
  workEyebrow: "Made together",
  workTitle: "A few finished stories",
  workSubtitle: "From planning through post, every project gets a team behind it.",
  processTitle: "A clear path through production",
  processSubtitle: "Stay close to the work without having to carry every moving part yourself.",
  process: [
    { title: "Plan with purpose", text: "We align on goals, scope and schedule, then put a practical production plan in place." },
    { title: "Make the day count", text: "Our crew brings the plan to life, keeping the set considered, collaborative and on track." },
    { title: "Finish with care", text: "We shape the edit, sound and colour, then prepare every final deliverable." },
  ],
  ctaTitle: "Let's make the next one happen.",
  ctaText: "Tell us where you are in the process—we can help take it from here.",
};

export default function Production() {
  return <ServiceLanding page={page} />;
}
