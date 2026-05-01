import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  { title: "Languages", skills: ["Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
  { title: "Frameworks", skills: ["React", "Node.js", "Express.js", "Tailwind CSS"] },
  { title: "Databases", skills: ["MongoDB", "MySQL"] },
  { title: "Core CS", skills: ["DSA", "OOPS", "REST APIs", "OS", "DBMS", "Computer Networks"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
  { title: "AI Tools", skills: ["OpenAI API", "ChatGPT", "GitHub Copilot", "Grok", "NotebookLM"] },
];

export default function Skills() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
