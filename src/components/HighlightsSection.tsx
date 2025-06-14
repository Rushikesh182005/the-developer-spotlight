
import { Separator } from "@/components/ui/separator";
import ProjectsCarousel from "./ProjectsCarousel";
import ExperienceTimeline from "./ExperienceTimeline";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="container py-20 animate-fade-in">
      <h3 className="text-4xl font-extrabold mb-2 text-primary text-center">
        Highlights
      </h3>
      <p className="text-muted-foreground text-lg mb-10 text-center">
        My best work and proudest moments.
      </p>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-2/3">
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span role="img" aria-label="rocket">🚀</span> Featured Projects
          </h4>
          <ProjectsCarousel />
        </div>
        <Separator orientation="vertical" className="hidden md:block mx-4" />
        <div className="md:w-1/3">
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span role="img" aria-label="briefcase">💼</span> Experience
          </h4>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
