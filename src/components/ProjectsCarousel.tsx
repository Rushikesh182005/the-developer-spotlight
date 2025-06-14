
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Terminal, Code2, Star } from "lucide-react";
import React from "react";

const PROJECTS = [
  {
    name: "Open Source Dashboard",
    description: "A modern analytics dashboard built using React, TypeScript, and Recharts for dynamic data visualization.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    link: "https://github.com/your-github/analytics-dashboard",
    icon: Terminal,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    name: "Realtime Chat App",
    description: "A scalable chat application with live messaging, built on WebSockets and Supabase Auth.",
    tags: ["React", "Supabase", "WebSockets", "Tailwind CSS"],
    link: "https://github.com/your-github/realtime-chat",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  },
  {
    name: "Dev Portfolio Template",
    description: "A sleek and customizable portfolio template for developers, built with accessibility in mind.",
    tags: ["React", "Accessibility", "Vite", "shadcn/ui"],
    link: "https://github.com/your-github/dev-portfolio-template",
    icon: Star,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

export default function ProjectsCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {PROJECTS.map((project, idx) => (
          <CarouselItem key={project.name}>
            <Card className="h-full flex flex-col group shadow-xl hover:shadow-2xl transition">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-t-lg w-full h-40 object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <CardHeader className="flex-row items-center gap-2 mt-2">
                <project.icon className="w-5 h-5 text-primary" />
                <CardTitle className="flex-1 text-lg">{project.name}</CardTitle>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition ml-auto" aria-label={`Visit ${project.name}`}>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/60 text-foreground px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
