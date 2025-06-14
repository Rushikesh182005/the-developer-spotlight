import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, Star, Shield } from "lucide-react";
import HighlightsSection from "@/components/HighlightsSection";

const NAVIGATION = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/your-github",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/your-linkedin",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:your@email.com",
    icon: Mail,
    label: "Email",
  },
];

const PROJECTS = [
  {
    name: "Open Source Dashboard",
    description: "A modern analytics dashboard built using React, TypeScript, and Recharts for dynamic data visualization.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    link: "https://github.com/your-github/analytics-dashboard",
    icon: Terminal,
  },
  {
    name: "Realtime Chat App",
    description: "A scalable chat application with live messaging, built on WebSockets and Supabase Auth.",
    tags: ["React", "Supabase", "WebSockets", "Tailwind CSS"],
    link: "https://github.com/your-github/realtime-chat",
    icon: Code2,
  },
  {
    name: "Dev Portfolio Template",
    description: "A sleek and customizable portfolio template for developers, built with accessibility in mind.",
    tags: ["React", "Accessibility", "Vite", "shadcn/ui"],
    link: "https://github.com/your-github/dev-portfolio-template",
    icon: Star,
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "SQL",
  "Accessibility",
  "shadcn/ui",
  "Recharts",
  "REST APIs",
  "Git",
];

// --- COMPONENTS ---

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
      <nav className="container flex mx-auto px-6 py-2 items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">Rushikesh Chippa</a>
        <div className="flex gap-6 items-center">
          <ul className="hidden md:flex gap-4">
            {NAVIGATION.map((nav) => (
              <li key={nav.href}>
                <a
                  href={nav.href}
                  className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-medium text-muted-foreground px-2 py-1 hover:text-primary transition-colors"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full w-8 h-8 flex items-center justify-center bg-accent hover:scale-110 transition hover:bg-primary/80 group"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="container max-w-3xl flex flex-col items-center py-24 gap-8 animate-fade-in">
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&q=80"
        alt="Developer typing"
        className="w-32 h-32 object-cover rounded-full mb-2 shadow-xl border-4 border-background"
        loading="lazy"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-2 text-center leading-tight">
        Hi, I'm Rushikesh Chippa 👋
      </h1>
      <h2 className="text-2xl font-medium text-muted-foreground mb-4 text-center">
        Software Engineer &amp; Web Developer
      </h2>
      <p className="text-lg text-muted-foreground text-center max-w-xl">
        I build scalable web apps with delightful user experiences. I love turning ideas into code and collaborating in modern dev teams.
      </p>
      <a
        href="#projects"
        className="inline-block mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold shadow hover:scale-105 transition-transform"
      >
        View My Projects
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container max-w-2xl py-16 animate-fade-in">
      <h3 className="text-3xl font-bold mb-4 text-primary">About Me</h3>
      <p className="text-lg text-muted-foreground mb-2">
        I'm a passionate developer specializing in building fast, accessible, and beautiful web applications. With a background in computer science and a focus on modern JavaScript/TypeScript frameworks, I thrive in dynamic teams and love problem-solving at scale.
      </p>
      <p className="text-lg text-muted-foreground">
        In my spare time, I contribute to open source, experiment with UI design, and mentor aspiring developers.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="container py-16 animate-fade-in">
      <h3 className="text-3xl font-bold mb-8 text-primary">Skills</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="bg-muted/80 text-foreground rounded-lg px-4 py-2 font-semibold shadow hover:bg-primary/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container max-w-lg py-20 text-center animate-fade-in">
      <h3 className="text-3xl font-bold mb-3 text-primary">Contact</h3>
      <p className="text-lg text-muted-foreground mb-6">
        Interested in working together or just want to say hi? Let's connect!
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:scale-105 transition-transform"
      >
        <Mail className="w-5 h-5" /> your@email.com
      </a>
    </section>
  );
}

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HighlightsSection />
        <Skills />
        <Contact />
      </main>
      <footer className="text-muted-foreground py-10 text-center text-sm">
        <span>
          &copy; {new Date().getFullYear()} Rushikesh Chippa &mdash; Coded with <span className="text-red-500">♥</span>
        </span>
      </footer>
    </div>
  );
};

export default Index;
