
import { Briefcase, GraduationCap, Award } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Lead Frontend Engineer",
    company: "TechCorp Inc.",
    period: "2023 – Present",
    description: "Owning the UI architecture for large-scale SaaS products and leading a team of 6 engineers.",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    company: "Creative Solutions",
    period: "2021 – 2023",
    description: "Developed real-time dashboards and design systems, improving product accessibility across platforms.",
    icon: Briefcase,
  },
  {
    title: "BSc. Computer Science",
    company: "University of Example",
    period: "2018 – 2021",
    description: "Graduated with distinction, focusing on web technologies & open source.",
    icon: GraduationCap,
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    period: "2019 – Present",
    description: "Contributed to popular open-source repos, earning recognition and awards.",
    icon: Award,
  },
];

export default function ExperienceTimeline() {
  return (
    <ol className="relative border-l-2 border-primary/20 pl-4 space-y-10">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.title + exp.period} className="relative flex items-start">
          <span className="absolute -left-[26px] flex items-center justify-center bg-primary text-primary-foreground rounded-full w-10 h-10 shadow-lg ring-4 ring-white dark:ring-background z-10">
            <exp.icon className="w-5 h-5" />
          </span>
          <div className="ml-2">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-base">{exp.title}</span>
              <span className="text-xs bg-muted/60 text-foreground px-2 py-0.5 rounded font-medium">{exp.company}</span>
            </div>
            <span className="block text-xs text-muted-foreground font-medium mb-1">
              {exp.period}
            </span>
            <p className="text-sm text-muted-foreground">{exp.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
