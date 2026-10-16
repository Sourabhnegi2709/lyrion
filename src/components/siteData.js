// src/data/siteData.js
const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Awards Won" },
  { value: 8, suffix: "+", label: "Years of Craft" },
];

export const values = [
  {
    icon: "camera",
    title: "Visual Storytelling",
    text: "Every frame is composed with intent. We turn ideas into images that people remember.",
  },
  {
    icon: "film",
    title: "Cinematic Quality",
    text: "From lenses to colour grading, we work with a true film-grade pipeline on every project.",
  },
  {
    icon: "lightbulb",
    title: "Creative Freedom",
    text: "We explore bold concepts and fresh angles, never copy-paste formulas.",
  },
  {
    icon: "handshake",
    title: "Client Partnership",
    text: "Your vision leads. We collaborate closely from first idea to final delivery.",
  },
];

export const timeline = [
  { year: "2018", title: "The Spark", text: "Lyrion Frame Art starts as a two-person team with one camera and big dreams." },
  { year: "2020", title: "First Studio", text: "We open our production studio and begin working with brands and filmmakers." },
  { year: "2022", title: "Going Cinematic", text: "Our first short film premieres at a regional festival and wins Best Cinematography." },
  { year: "2024", title: "Full Production House", text: "In-house pre-production, shooting, VFX, sound and colour under one roof." },
  { year: "2026", title: "Beyond Frames", text: "Commercials, documentaries, music videos and branded films across the country." },
];

export const team = [
  { name: "Aarav Mehta", role: "Founder & Director", image: img("photo-1507003211169-0a1dd7228f2d", 800) },
  { name: "Riya Kapoor", role: "Director of Photography", image: img("photo-1494790108377-be9c29b29330", 800) },
  { name: "Kabir Singh", role: "Lead Editor & Colorist", image: img("photo-1500648767791-00dcc994a43e", 800) },
  { name: "Ananya Rao", role: "Producer", image: img("photo-1438761681033-6461ffad8d80", 800) },
];

export const services = [
  "Commercial Films",
  "Short Films",
  "Documentaries",
  "Music Videos",
  "Corporate Films",
  "Wedding Cinematography",
  "Drone Shoots",
  "Color Grading",
  "Post Production",
  "Photography",
];

export const categories = ["All", "Commercial", "Short Film", "Music Video", "Documentary", "Photography"];

export const projects = [
  {
    id: 1,
    title: "Midnight Reverie",
    category: "Short Film",
    year: "2025",
    role: "Direction, Cinematography",
    description: "A moody neo-noir short about memory and loss, shot entirely at night.",
    image: img("photo-1485846234645-a62644f84728"),
  },
  {
    id: 2,
    title: "Aurora Watches",
    category: "Commercial",
    year: "2025",
    role: "Production, Post",
    description: "A luxury watch campaign built around light, metal and motion.",
    image: img("photo-1523275335684-37898b6baf30"),
  },
  {
    id: 3,
    title: "Neon Pulse",
    category: "Music Video",
    year: "2024",
    role: "Direction, VFX",
    description: "A high-energy music video with practical neon lighting and stylised choreography.",
    image: img("photo-1470225620780-dba8ba36b745"),
  },
  {
    id: 4,
    title: "Rivers of Stone",
    category: "Documentary",
    year: "2024",
    role: "Cinematography, Editing",
    description: "A documentary following artisans in the Himalayan foothills.",
    image: img("photo-1464822759023-fed622ff2c3b"),
  },
  {
    id: 5,
    title: "Golden Hour Stories",
    category: "Photography",
    year: "2023",
    role: "Photography",
    description: "A portrait series chasing the last warm light of the day.",
    image: img("photo-1516035069371-29a1b244cc32"),
  },
  {
    id: 6,
    title: "Velocity",
    category: "Commercial",
    year: "2023",
    role: "Direction, Drone, Post",
    description: "A fast, kinetic automotive film shot across mountain roads.",
    image: img("photo-1492144534655-ae79c964c9d7"),
  },
  {
    id: 7,
    title: "The Last Reel",
    category: "Short Film",
    year: "2023",
    role: "Production, Cinematography",
    description: "A tribute to old cinema halls and the people who kept them alive.",
    image: img("photo-1440404653325-ab127d49abc1"),
  },
  {
    id: 8,
    title: "Echoes",
    category: "Music Video",
    year: "2022",
    role: "Direction, Color",
    description: "An atmospheric, slow-burn visual poem for an indie artist.",
    image: img("photo-1511671782779-c97d3d27a1d4"),
  },
];

export const gallery = [
  { id: 1, title: "On Set", category: "Behind the Scenes", image: img("photo-1478720568477-152d9b164e26"), span: "row-span-2" },
  { id: 2, title: "Lens Study", category: "Photography", image: img("photo-1516035069371-29a1b244cc32"), span: "" },
  { id: 3, title: "Cinema Hall", category: "Stills", image: img("photo-1440404653325-ab127d49abc1"), span: "" },
  { id: 4, title: "Stage Lights", category: "Stills", image: img("photo-1470225620780-dba8ba36b745"), span: "row-span-2" },
  { id: 5, title: "Golden Hour", category: "Photography", image: img("photo-1492144534655-ae79c964c9d7"), span: "" },
  { id: 6, title: "Studio Day", category: "Behind the Scenes", image: img("photo-1598899134739-24c46f58b8c0"), span: "" },
  { id: 7, title: "Mountain Frame", category: "Stills", image: img("photo-1464822759023-fed622ff2c3b"), span: "row-span-2" },
  { id: 8, title: "Night Walk", category: "Stills", image: img("photo-1485846234645-a62644f84728"), span: "" },
  { id: 9, title: "Time & Light", category: "Photography", image: img("photo-1523275335684-37898b6baf30"), span: "" },
  { id: 10, title: "Live Moments", category: "Behind the Scenes", image: img("photo-1511671782779-c97d3d27a1d4"), span: "" },
  { id: 11, title: "Film Roll", category: "Stills", image: img("photo-1536440136628-849c177e76a1"), span: "row-span-2" },
  { id: 12, title: "Set Design", category: "Behind the Scenes", image: img("photo-1574267432553-4b4628081c31"), span: "" },
];

export const galleryCategories = ["All", "Stills", "Photography", "Behind the Scenes"];

export const contactInfo = {
  email: "hello@lyrionframeart.com",
  phone: "+91 98765 43210",
  address: "Lyrion Studio, Film City Road, New Delhi, India",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM",
};

export const heroImages = {
  about: img("photo-1478720568477-152d9b164e26", 1800),
  work: img("photo-1536440136628-849c177e76a1", 1800),
  gallery: img("photo-1516035069371-29a1b244cc32", 1800),
  contact: img("photo-1598899134739-24c46f58b8c0", 1800),
  story: img("photo-1485846234645-a62644f84728", 1200),
};
