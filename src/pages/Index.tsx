import { Mail, MapPin, Terminal, ArrowRight, ExternalLink } from "lucide-react";

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

const experiences = [
  {
    id: 1,
    title: "Junior Web Developer",
    subtitle: "Asiapossible",
    period: "June 2025 – Dec 2025",
    tags: ["PHP", "JS", "Wordpress", "AJAX", "JQuery"],
    bullets: [
      "Built a shortcode + AJAX-driven search system that filters BuddyPress users, groups, forums, jobs, and language with instant results.",
      "Created dynamic user directory filters and custom subnav items using WordPress hooks and URL parameters.",
      "Created dynamic member filtering via location and different attributes of the user.",
    ],
    links: [] as { label: string; url: string }[],
  },
  {
    id: 2,
    title: "Software QA Intern",
    subtitle: "Infor",
    period: "March 2024 – June 2024",
    tags: ["Postman", "Jira", "Manual Testing", "Automation Testing"],
    bullets: [
      "Participated in software testing of web and mobile projects using Manual, Automation and Functional testing in an Agile environment.",
      "Created test cases and reports after QA team reassignment, completing 60% of tasks with minimal supervision.",
      "Wrote 30+ test cases and bug reports using the company's in-house application.",
    ],
    links: [] as { label: string; url: string }[],
  },
];

const projects = [
  {
    id: 1,
    title: "ProjectBoard",
    subtitle: "Personal Project",
    period: "2024",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Laravel", "mySQL"],
    brief: "A developer productivity dashboard with task tracking.",
    bullets: [
      "Calendar scheduling with drag-and-drop Kanban board.",
      "Dark/light mode toggle with persistent user preference.",
    ],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    emoji: "📊",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(13,148,136,0.2))",
  },
  {
    id: 2,
    title: "FileSend",
    subtitle: "Open Source",
    period: "2023",
    tags: ["React", "Node.js", "S3", "Docker"],
    brief: "Secure peer-to-peer file sharing with end-to-end encryption.",
    bullets: [
      "Client-side AES-256 encryption before upload — server never sees plaintext.",
      "Files auto-delete from S3 after link expiry (configurable 1h–7d).",
      "Dockerized deployment, one-command self-host.",
    ],
    links: [{ label: "GitHub", url: "#" }],
    emoji: "🔒",
    gradient: "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(124,58,237,0.2))",
  },
  {
    id: 3,
    title: "UIKit",
    subtitle: "Open Source Library",
    period: "2023",
    tags: ["React", "TypeScript", "Storybook"],
    brief: "A minimal accessible React component library with 20+ components.",
    bullets: [
      "20+ components documented with live Storybook examples.",
      "WCAG 2.1 AA compliant — tested with screen readers.",
      "Tree-shakeable package under 15 kB gzipped.",
    ],
    links: [
      { label: "Docs", url: "#" },
      { label: "npm", url: "#" },
    ],
    emoji: "🎨",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.2))",
  },
];

// ─── COLORS ──────────────────────────────────────────────────────────────────
const C = {
  bg:        "#0b0b12",
  surface:   "rgba(15,25,48,0.6)",
  glass:     "rgba(25,37,64,0.4)",
  border:    "rgba(255,255,255,0.07)",
  amber:     "#f59e0b",
  amberDim:  "#d97706",
  teal:      "#0d9488",
  textHi:    "#f3f3f7",
  textMid:   "#e2e2e8",
  textMuted: "#9ca3af",
  textDim:   "#6b7280",
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const allSkillItems = skills.flatMap((g) => g.items);

export default function Index() {
  return (
    <div style={{ background: C.bg, color: C.textMid, minHeight: "100vh" }}>

      {/* ── Fixed Nav ── */}
      <nav
        style={{
          position: "fixed", top: 0, width: "100%", zIndex: 50,
          background: "rgba(11,11,18,0.65)", backdropFilter: "blur(20px)",
          boxShadow: "0 40px 40px -5px rgba(245,158,11,0.04)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.03em", color: C.textHi }}>
            ZYREL.DEV
          </span>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {(["About", "Skills", "Projects", "Experience"] as const).map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                style={{ fontSize: "14px", fontWeight: 500, color: "rgba(243,243,247,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,243,247,0.6)")}
              >
                {s}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            style={{
              background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
              color: C.bg, fontWeight: 700, fontSize: "14px",
              padding: "8px 24px", borderRadius: "12px", textDecoration: "none",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px", overflow: "hidden" }}
      >
        {/* Background glows */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "25%", left: "25%", width: "384px", height: "384px", background: `rgba(245,158,11,0.08)`, borderRadius: "50%", filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "25%", right: "25%", width: "256px", height: "256px", background: "rgba(13,148,136,0.08)", borderRadius: "50%", filter: "blur(100px)" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1024px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.amber, marginBottom: "24px" }}>
            Available for Projects
          </span>
          <h1
            style={{
              fontSize: "clamp(56px, 10vw, 112px)", fontWeight: 900,
              letterSpacing: "-0.04em", lineHeight: 0.88,
              color: C.textHi, marginBottom: "32px",
            }}
          >
            FULL-STACK
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${C.amber}, #fbbf24, ${C.teal})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              DEVELOPER
            </span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: C.textMuted, maxWidth: "640px", margin: "0 auto 48px", fontWeight: 300, lineHeight: 1.6 }}>
            {profile.summary}
          </p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                padding: "16px 32px", background: C.amber, color: C.bg,
                fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              Explore Works
            </a>
            <a
              href="#experience"
              style={{
                padding: "16px 32px", background: C.glass,
                backdropFilter: "blur(12px)", border: `1px solid ${C.border}`,
                color: C.textHi, fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(35,50,80,0.6)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = C.glass)}
            >
              View Experience
            </a>
          </div>
        </div>

        {/* Fade bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "256px", background: `linear-gradient(to top, ${C.bg}, transparent)`, pointerEvents: "none" }} />
      </section>

      {/* ── About ── */}
      <section id="about" style={{ padding: "96px 32px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "center" }}>

          {/* Left — portrait card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "1", borderRadius: "16px", overflow: "hidden",
                background: `linear-gradient(135deg, rgba(245,158,11,0.15), rgba(13,148,136,0.12))`,
                border: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center", padding: "48px" }}>
                <div style={{ fontSize: "72px", lineHeight: 1, marginBottom: "16px" }}>👨‍💻</div>
                <p style={{ fontWeight: 800, fontSize: "20px", color: C.textHi, letterSpacing: "-0.02em" }}>{profile.name}</p>
                <p style={{ fontSize: "13px", marginTop: "4px", color: C.amber, fontWeight: 600 }}>{profile.title}</p>
              </div>
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute", bottom: "-32px", right: "-32px",
                background: C.glass, backdropFilter: "blur(12px)",
                border: `1px solid ${C.border}`, padding: "20px 24px",
                borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px",
              }}
            >
              <Terminal size={32} style={{ color: C.amber }} />
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: C.amber }}>Stack</p>
                <p style={{ color: C.textHi, fontWeight: 700, marginTop: "2px" }}>React & Laravel Dev</p>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.amber, display: "block", marginBottom: "16px" }}>
              Personal Narrative
            </span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", color: C.textHi, marginBottom: "32px" }}>
              Building logic into{" "}
              <span style={{ color: C.teal }}>art.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "17px", lineHeight: 1.7, color: C.textMuted }}>
              <p>{profile.summary}</p>
              <p>From designing Laravel backends to crafting pixel-perfect React interfaces, I focus on clean code, performance, and the human experience behind every interaction.</p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "48px", marginTop: "48px" }}>
              <div>
                <p style={{ fontSize: "36px", fontWeight: 900, color: C.textHi, lineHeight: 1 }}>{projects.length}+</p>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: C.textDim, marginTop: "4px" }}>Projects Delivered</p>
              </div>
              <div>
                <p style={{ fontSize: "36px", fontWeight: 900, color: C.textHi, lineHeight: 1 }}>1+</p>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: C.textDim, marginTop: "4px" }}>Years Crafting</p>
              </div>
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "32px", fontSize: "13px" }}>
              {[
                { icon: <Mail size={13} />, href: `mailto:${profile.email}`, label: profile.email },
                { icon: <MapPin size={13} />, href: null, label: profile.location },
                { icon: <ExternalLink size={13} />, href: `https://${profile.github}`, label: profile.github },
                { icon: <ExternalLink size={13} />, href: `https://${profile.linkedin}`, label: "LinkedIn" },
              ].map(({ icon, href, label }) =>
                href ? (
                  <a
                    key={label} href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", color: C.textMuted, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
                  >
                    {icon} {label}
                  </a>
                ) : (
                  <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", color: C.textMuted }}>
                    {icon} {label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills — Infinite Slider ── */}
      <section id="skills" style={{ padding: "96px 0", background: "rgba(255,255,255,0.018)", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, letterSpacing: "-0.04em", color: C.textHi, marginBottom: "16px" }}>
            Mastered Ecosystems
          </h2>
          <div style={{ height: "4px", width: "96px", background: `linear-gradient(to right, ${C.amber}, ${C.teal})`, margin: "0 auto", borderRadius: "9999px" }} />
        </div>

        <div className="animate-scroll" style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          {[...allSkillItems, ...allSkillItems].map((skill, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex", alignItems: "center", gap: "12px",
                background: C.glass, backdropFilter: "blur(12px)",
                border: `1px solid ${C.border}`, padding: "20px 32px",
                margin: "0 12px", borderRadius: "12px", cursor: "default",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(245,158,11,0.5)`)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = C.border)}
            >
              <span style={{ color: C.amber, fontSize: "18px", fontWeight: 700, fontFamily: "monospace" }}>&lt;/&gt;</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: C.textHi }}>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: "96px 32px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.teal, display: "block", marginBottom: "12px" }}>
              Portfolio
            </span>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", color: C.textHi }}>
              Selected Works
            </h2>
          </div>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "8px", color: C.amber, fontWeight: 700, fontSize: "14px", textDecoration: "underline", textUnderlineOffset: "8px", textDecorationColor: "rgba(245,158,11,0.3)" }}
          >
            View All Repositories <ArrowRight size={16} />
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: "16px", overflow: "hidden", transition: "transform 0.5s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.02)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              {/* Card image area */}
              <div style={{ height: "220px", background: proj.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "52px", lineHeight: 1, marginBottom: "8px" }}>{proj.emoji}</div>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(243,243,247,0.5)" }}>{proj.subtitle} · {proj.period}</p>
                </div>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${C.surface}, transparent)`, opacity: 0.7 }} />
              </div>

              <div style={{ padding: "32px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: C.textHi, marginBottom: "12px" }}>{proj.title}</h3>
                <p style={{ color: C.textMuted, fontSize: "14px", marginBottom: "20px", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>
                  {proj.brief}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {proj.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      style={{ fontSize: "11px", padding: "4px 12px", background: "rgba(245,158,11,0.1)", color: C.amber, border: "1px solid rgba(245,158,11,0.2)", borderRadius: "9999px", fontWeight: 600 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {proj.links.length > 0 ? (
                    proj.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1, padding: "12px 8px", textAlign: "center",
                          background: C.glass, border: `1px solid ${C.border}`,
                          color: C.textHi, fontWeight: 700, borderRadius: "12px",
                          fontSize: "13px", textDecoration: "none",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                          transition: "background 0.3s, color 0.3s, border-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = C.amber;
                          el.style.color = C.bg;
                          el.style.borderColor = C.amber;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = C.glass;
                          el.style.color = C.textHi;
                          el.style.borderColor = C.border;
                        }}
                      >
                        <ExternalLink size={11} /> {link.label}
                      </a>
                    ))
                  ) : (
                    <div
                      style={{
                        width: "100%", padding: "12px", textAlign: "center",
                        background: C.glass, border: `1px solid ${C.border}`,
                        color: C.textMuted, fontWeight: 700, borderRadius: "12px", fontSize: "13px",
                      }}
                    >
                      In Development
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.018)" }}>
        <div style={{ maxWidth: "896px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: C.teal, display: "block", marginBottom: "12px" }}>
              Trajectory
            </span>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-0.04em", color: C.textHi }}>
              Career Path
            </h2>
          </div>

          {/* Timeline */}
          <div className="timeline-track" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "48px" }}>
            {[
              ...experiences.map((e, i) => ({ ...e, dotColor: i === 0 ? C.amber : C.teal, icon: i === 0 ? "💼" : "⚡" })),
              ...education.map((e) => ({ id: 99, title: e.degree, subtitle: e.school, period: e.year, bullets: [], dotColor: C.textDim, icon: "🎓" })),
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0", alignItems: "flex-start" }}
                >
                  {/* Left column */}
                  <div style={{ textAlign: "right", paddingRight: "40px", paddingTop: "4px" }}>
                    {isLeft ? (
                      <>
                        <h4 style={{ fontSize: "18px", fontWeight: 700, color: C.textHi, marginBottom: "4px" }}>{item.title}</h4>
                        <p style={{ fontWeight: 600, color: item.dotColor, marginBottom: "8px" }}>{item.subtitle}</p>
                        {"bullets" in item && (item as typeof experiences[0]).bullets.slice(0, 2).map((b, i) => (
                          <p key={i} style={{ fontSize: "13px", color: C.textMuted, lineHeight: 1.6, marginBottom: "4px" }}>{b}</p>
                        ))}
                      </>
                    ) : (
                      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.textDim }}>{item.period}</span>
                    )}
                  </div>

                  {/* Dot */}
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: item.dotColor, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `4px solid ${C.bg}`, zIndex: 10, fontSize: "14px",
                  }}>
                    {item.icon}
                  </div>

                  {/* Right column */}
                  <div style={{ paddingLeft: "40px", paddingTop: "4px" }}>
                    {!isLeft ? (
                      <>
                        <h4 style={{ fontSize: "18px", fontWeight: 700, color: C.textHi, marginBottom: "4px" }}>{item.title}</h4>
                        <p style={{ fontWeight: 600, color: item.dotColor, marginBottom: "8px" }}>{item.subtitle}</p>
                        {"bullets" in item && (item as typeof experiences[0]).bullets.slice(0, 2).map((b, i) => (
                          <p key={i} style={{ fontSize: "13px", color: C.textMuted, lineHeight: 1.6, marginBottom: "4px" }}>{b}</p>
                        ))}
                      </>
                    ) : (
                      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.textDim }}>{item.period}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "linear-gradient(to top, #000, transparent)", borderTop: `1px solid rgba(243,243,247,0.06)` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: 900, textTransform: "uppercase", color: C.amber, marginBottom: "8px" }}>
              ZYREL.DEV
            </div>
            <p style={{ fontSize: "13px", color: "rgba(243,243,247,0.35)" }}>
              © 2025 Zyrel James S. Frias. Full-Stack Developer.
            </p>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { label: "Email", href: `mailto:${profile.email}` },
              { label: "LinkedIn", href: `https://${profile.linkedin}` },
              { label: "GitHub", href: `https://${profile.github}` },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{ color: "rgba(243,243,247,0.4)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.amber;
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(243,243,247,0.4)";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── FAB ── */}
      <a
        href={`mailto:${profile.email}`}
        style={{
          position: "fixed", bottom: "32px", right: "32px", zIndex: 40,
          width: "64px", height: "64px",
          background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
          borderRadius: "50%", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: C.bg, textDecoration: "none",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
      >
        <Mail size={26} />
      </a>

    </div>
  );
}
