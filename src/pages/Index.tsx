import { useState } from "react";

import { X, MapPin, Mail, Github, Linkedin, Globe, Calendar, ExternalLink } from "lucide-react";
import SectionTitle from "../components/ui/display/SectionTitle";
import Tag from "../components/ui/display/Tag";
import ItemCard from "../components/ui/display/ItemCard";

// ─── DATA ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Zyrel James S. Frias",
  title: "Full-Stack Developer",
  location: "Magallanes Cavite",
  email: "zyrelfrias00@gmail.com",
  github: "github.com/zyyyyd",
  linkedin: "linkedin.com/in/zyrel",
  website: "zyrel.dev",
  summary:
    "Passionate full-stack developer with experience building scalable web applications. I love turning complex problems into clean, user-friendly solutions.",
};

const skills: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Shadcn"] },
  { category: "Backend", items: ["PHP", "Laravel", "mySQL", "Prisma"] },
  { category: "Tools", items: ["Git", "Postman", "Figma", "VS Code", "Jira"] },
];

const education = [
  {
    degree: "B.S. Information Technology",
    school: "Rogationist College",
    year: "2020 – 2024",
  },
];

interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  brief: string;
  description: string | null;
  bullets: string[];
  links?: { label: string; url: string }[];
}

const experiences: CardItem[] = [
  {
    id: 1,
    title: "Junior Web Developer",
    subtitle: "Asiapossible",
    period: "June 2025 - Dec 2025",
    tags: ["PHP","JS", "Wordpress", "AJAX", "JQuery"],
    brief: "Building the main product dashboard and design system.",
     description:
       null,
    bullets: [
      "Built a shortcode + AJAX-driven search system that filters BuddyPress users, groups, forums, jobs, and language with instant results.",
      "Created dynamic user directory filters and custom subnav items using WordPress hooks and URL parameters. ",
      "Created dynamic member filtering via location and different attributes of the user",
    ],
    links: [{ label: "acmecorp.com", url: "#" }],
  },
  {
    id: 2,
    title: "Software QA Intern",
    subtitle: "Infor",
    period: "March 2024 - June 2024",
    tags: ["Postman", "Jira", "Manual Testing", "Automation Testing"],
    brief: "Developed full-stack features for an e-commerce platform.",
    description:
      "Worked in a fast-paced startup environment building and maintaining a full-stack e-commerce platform. Owned features end-to-end from DB schema to UI.",
    bullets: [
      "Participated in the software testing of projects in web and mobile environments using Manual, Automation and Functional testing in an Agile Environment.",
      "Created test cases and reports after the QA team was reassigned to other projects, successfully completing 60% of the tasks with minimal supervision.",
      "Created around 30+ test cases and provided bug reports supervised with thecompany’s in-house application",
    ],
    links: [{ label: "startupxyz.io", url: "#" }],
  },
];

const projects: CardItem[] = [
  {
    id: 1,
    title: "ProjectBoard",
    subtitle: "Personal Project",
    period: "2024",
    tags: ["React", "Typescript", "Tailwind", "Shadcn", "Laravel", "mySQL"],
    brief: "A developer productivity dashboard with task tracking",
    description:
      "ProjectBoard is a personal productivity tool built for developers. ",
    bullets: [
      "Calendar Scheduling",
      "Drag-and-drop Kanban board",
      "Dark/light mode.",
    ],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: 2,
    title: "FileSend",
    subtitle: "Open Source",
    period: "2023",
    tags: ["React", "Node.js", "S3", "Docker"],
    brief: "Secure peer-to-peer file sharing with end-to-end encryption.",
    description:
      "A lightweight file sharing app that encrypts files client-side before uploading to S3. The recipient gets a time-limited link and the decryption key is never stored on the server.",
    bullets: [
      "Client-side AES-256 encryption before upload — server never sees plaintext.",
      "Files auto-delete from S3 after link expiry (configurable 1h–7d).",
      "Dockerized deployment, one-command self-host.",
    ],
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: 3,
    title: "UIKit",
    subtitle: "Open Source Library",
    period: "2023",
    tags: ["React", "TypeScript", "Storybook"],
    brief: "A minimal accessible React component library with 20+ components.",
    description:
      "UIKit is a headless-first component library built on Radix UI primitives. Every component is fully accessible, keyboard-navigable, and themeable via CSS variables.",
    bullets: [
      "20+ components documented with live Storybook examples.",
      "WCAG 2.1 AA compliant — tested with screen readers.",
      "Tree-shakeable package under 15 kB gzipped.",
    ],
    links: [
      { label: "Docs", url: "#" },
      { label: "npm", url: "#" },
    ],
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="bg-zinc-950 rounded-2xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-1 " style={{color:'white'}}>
                {profile.name}
              </h1>
              <p className="text-sm text-zinc-400 tracking-wide">{profile.title}</p>
            </div>
            <div className="flex flex-col gap-1.5 text-xs text-zinc-500">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={12} /> {profile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} /> {profile.location}
              </span>
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Github size={12} /> {profile.github}
              </a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Linkedin size={12} /> {profile.linkedin}
              </a>
              <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Globe size={12} /> {profile.website}
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="space-y-6">

            {/* Summary */}
            <section className="bg-white rounded-2xl border border-zinc-200 p-6">
              <SectionTitle>About</SectionTitle>
              <p className="text-sm text-zinc-600 leading-relaxed">{profile.summary}</p>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-2xl border border-zinc-200 p-6">
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <Tag key={skill} label={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-2xl border border-zinc-200 p-6">
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-sm font-semibold text-zinc-900">{edu.degree}</p>
                    <p className="text-xs text-zinc-500">{edu.school}</p>
                    <p className="text-xs text-zinc-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Experience */}
            <section className="bg-white rounded-2xl border border-zinc-200 p-6">
              <SectionTitle>Experience</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experiences.map((exp) => (
                  <ItemCard key={exp.id} item={exp} type="experience" />
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="bg-white rounded-2xl border border-zinc-200 p-6">
              <SectionTitle>Projects</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((proj) => (
                  <ItemCard key={proj.id} item={proj} type="project" />
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
