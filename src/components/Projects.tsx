import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
   {
    title: "GenAI Resume Analyzer Interview Prep System",
    description:
      "A full-stack AI-powered platform that analyzes resumes, identifies skill gaps, matches job descriptions, and provides ATS-optimized improvement suggestions. Includes AI-generated interview questions, secure JWT authentication, and automated resume processing for enhanced career preparation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google Gemini API", "Puppeteer"],
    highlights: ["Resume Analysis", "Interview Question Generator", "ATS Optimization"],
  },
   {
    title: "AI Resume Builder",
    description:
      "A full-stack MERN application that helps users create professional resumes using AI-powered content suggestions, customizable templates, and real-time preview. Features secure authentication, resume export, and responsive design for seamless user experience.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
    highlights: ["AI Content Generation", "Resume PDF Export", "Responsive UI"],
  },
  {
    title: "Employee Management System",
    description:
      "A comprehensive web application for managing employee records with secure JWT authentication, an intuitive admin dashboard, and performance tracking modules. Designed to streamline HR workflows and improve organizational efficiency.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    highlights: ["Secure Authentication", "Admin Dashboard", "Performance Tracking"],
  },
  {
    title: "Smart Property Booking Platform",
    description:
      "A full-stack MERN application enabling seamless property discovery and booking with role-based access control for admins, owners, and tenants. Features a responsive UI with advanced search, filtering, and booking management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
    highlights: ["Role-Based Access", "Booking Management", "Responsive UI"],
  },
];

export default function Projects() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="h-48 bg-secondary flex items-center justify-center text-muted-foreground text-sm">
                Project Preview
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.highlights.map((h) => (
                    <Badge key={h} className="text-xs">{h}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs font-normal">{t}</Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-3 w-3" /> View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
