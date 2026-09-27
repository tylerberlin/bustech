// All editable club content lives here. Update this file each semester —
// no component changes needed.
//
// TODO: Replace every value marked PLACEHOLDER with real club info.

export const club = {
  name: "Business & Technology Club",
  shortName: "BusTech",
  school: "The University of Tampa",
  tagline: "Where Spartans build at the intersection of business and technology.",
  email: "bustech@spartans.ut.edu", // PLACEHOLDER
  meeting: "Tuesdays · 6:00 PM · Sykes College of Business", // PLACEHOLDER
};

export const links = {
  // PLACEHOLDER — paste the club's Involve page URL.
  involve: "https://utampa.campuslabs.com/engage/",
  instagram: "https://instagram.com/", // PLACEHOLDER
  linkedin: "https://linkedin.com/", // PLACEHOLDER
  discord: "", // optional — leave empty to hide
};

export const about = {
  lede: "We're a student organization for anyone curious about how technology is reshaping business — and how business thinking makes technology matter.",
  body: [
    "Our members come from every corner of campus: finance, marketing, MIS, computer science, entrepreneurship, and beyond. You don't need to code, and you don't need a business major. You need curiosity.",
    "Each semester we host industry speakers, hands-on workshops, company visits across Tampa Bay, and build nights where members ship real projects together.",
  ],
  pillars: [
    { code: "LRN", title: "Learn", text: "Workshops on AI, data, product, fintech, and the tools employers actually use." },
    { code: "NET", title: "Connect", text: "Speakers, alumni panels, and site visits with Tampa Bay's tech and business leaders." },
    { code: "BLD", title: "Build", text: "Team projects, case competitions, and hackathons that end up on your résumé." },
  ],
};

export type Officer = {
  name: string;
  role: string;
  major: string;
  year: string;
  bio: string;
  photo?: string; // path under /public, e.g. "/officers/jane.jpg"
  linkedin?: string;
};

// PLACEHOLDER — replace with the current officer board.
export const officers: Officer[] = [
  { name: "Officer Name", role: "President", major: "Management Information Systems", year: "Senior", bio: "Leads club strategy and partnerships with Tampa Bay companies." },
  { name: "Officer Name", role: "Vice President", major: "Finance", year: "Junior", bio: "Runs the speaker series and keeps meetings on track." },
  { name: "Officer Name", role: "Treasurer", major: "Accounting", year: "Junior", bio: "Manages the budget, funding requests, and event spending." },
  { name: "Officer Name", role: "Secretary", major: "Marketing", year: "Sophomore", bio: "Handles communications, minutes, and the member newsletter." },
  { name: "Officer Name", role: "Director of Technology", major: "Computer Science", year: "Senior", bio: "Leads build nights, workshops, and the club's tech projects." },
  { name: "Officer Name", role: "Director of Outreach", major: "Entrepreneurship", year: "Sophomore", bio: "Grows membership and runs our social channels." },
];

export type ClubEvent = {
  title: string;
  date: string; // ISO date, YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  tag: "Speaker" | "Workshop" | "Social" | "Competition" | "Site Visit" | "Meeting";
  rsvp?: string; // defaults to the Involve link
};

// PLACEHOLDER — replace with real events. Past events hide automatically.
export const events: ClubEvent[] = [
  { title: "General Body Meeting: Fall Kickoff", date: "2026-10-06", time: "6:00 PM", location: "Sykes College of Business", description: "Meet the board, hear the semester roadmap, and join a project team.", tag: "Meeting" },
  { title: "AI in the Workplace Workshop", date: "2026-10-15", time: "6:30 PM", location: "Sykes College · Room TBD", description: "Hands-on session using AI tools for research, analysis, and presentations.", tag: "Workshop" },
  { title: "Tampa Tech Leaders Panel", date: "2026-10-29", time: "7:00 PM", location: "Vaughn Center", description: "Local founders and executives on breaking into tech from any major.", tag: "Speaker" },
  { title: "Downtown Tampa Company Visit", date: "2026-11-07", time: "10:00 AM", location: "Meet at Plant Hall", description: "Tour a Tampa Bay tech company and meet their recruiting team.", tag: "Site Visit" },
  { title: "Case Competition Night", date: "2026-11-18", time: "6:00 PM", location: "Sykes College of Business", description: "Teams pitch a tech-driven solution to a real business problem. Prizes for the top three.", tag: "Competition" },
];

// Set at build time for GitHub Pages (site lives under /<repo-name>).
// Used to prefix paths to files in /public, which Next doesn't do for
// unoptimized images.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
