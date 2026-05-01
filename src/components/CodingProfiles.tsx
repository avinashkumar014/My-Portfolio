import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Code2, BookOpen } from "lucide-react";

const profiles = [
  { icon: Github, label: "GitHub", href: "https://github.com/avinashkumar014", color: "hover:border-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/avinash-kumar-0a1795262/", color: "hover:border-primary" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Avinashkumar45_45/", color: "hover:border-yellow-500" },
  { icon: BookOpen, label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/avinashkul78q?tab=activity", color: "hover:border-green-500" },
];

export default function CodingProfiles() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-secondary/30">
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Coding <span className="text-gradient">Profiles</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-card border border-border rounded-xl p-6 text-center transition-all ${p.color} hover:shadow-lg group`}
            >
              <p.icon className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              <p className="font-medium text-sm text-foreground">{p.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
