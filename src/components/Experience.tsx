import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="space-y-8">
          {/* Experience */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Web Development Intern</h3>
                <p className="text-primary font-medium text-sm">AD Infocom Systems • Remote</p>
                <p className="text-muted-foreground text-xs mt-1 mb-3">June 2025 – August 2025</p>
                <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                  <li>Developed and maintained responsive web applications using React and Tailwind CSS</li>
                  <li>Collaborated with the team to implement RESTful APIs and database integrations</li>
                  <li>Gained hands-on experience with Git workflows and agile development practices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">B.Tech – Information Technology</h3>
                <p className="text-primary font-medium text-sm">Bundelkhand Institute of Engineering & Technology, Jhansi</p>
                <p className="text-muted-foreground text-xs mt-1 mb-3">2022 – 2026 • CGPA: 7.72</p>
                <div className="flex flex-wrap gap-2">
                  {["DSA", "Operating Systems", "DBMS", "Computer Networks", "Software Engineering"].map((c) => (
                    <span key={c} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
