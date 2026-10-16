import { FaCamera, FaFilm, FaLightbulb, FaSun } from "react-icons/fa";

import ServiceLanding from "../components/ServiceLanding";
import { heroImages } from "../components/siteData";

const page = {
  eyebrow: "Film & Cinematography",
  title: "Light That Tells Stories",
  subtitle:
    "Images with intention. We build a visual language around your story, then bring every frame to life with care.",
  image: heroImages.about,
  introEyebrow: "Behind the lens",
  introTitle: "A point of view in every frame.",
  introText:
    "From the first location scout to the final grade, our cinematography team shapes the look and feeling of your film. We bring directors, camera crews and lighting together around one clear visual idea.",
  pullQuote: "The right image doesn't just show you a story. It makes you feel it.",
  frameIds: [1, 4, 8],
  sequence: {
    kicker: "The visual language",
    title: "Built on light. Driven by feeling.",
    description:
      "We pair considered composition with expressive movement and light, creating a look that feels true to the story and stays with you after the cut.",
  },
  capabilitiesEyebrow: "The craft",
  capabilitiesTitle: "Every detail in focus",
  capabilitiesSubtitle:
    "A thoughtful camera and lighting approach, tailored to the story in front of us.",
  capabilities: [
    { icon: FaCamera, title: "Camera & lenses", text: "A camera package chosen for the texture, movement and scale of your film." },
    { icon: FaSun, title: "Lighting design", text: "Shaping natural and designed light to bring depth, mood and meaning to each scene." },
    { icon: FaFilm, title: "Movement & framing", text: "Intentional camera movement and composition that draw the audience into the moment." },
    { icon: FaLightbulb, title: "Look development", text: "A consistent visual direction, from reference boards through to the final colour grade." },
  ],
  projectIds: [1, 4, 8],
  workEyebrow: "Selected frames",
  workTitle: "Stories through the lens",
  workSubtitle: "A few worlds we've had the pleasure of helping bring into focus.",
  processTitle: "From first look to final frame",
  processSubtitle: "A close creative partnership at every stage of the image-making process.",
  process: [
    { title: "Find the look", text: "We explore references, locations, camera tests and light to define the visual language." },
    { title: "Shape the shoot", text: "We collaborate with your director and crew to plan a confident, considered shoot." },
    { title: "Finish the frame", text: "We refine the image in post, bringing colour, contrast and texture together." },
  ],
  ctaTitle: "Let's find your film's look.",
  ctaText: "Share the story you're shaping and we'll start imagining it together.",
};

export default function Cinematography() {
  return <ServiceLanding page={page} />;
}
