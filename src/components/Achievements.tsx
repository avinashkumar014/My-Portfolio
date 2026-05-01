import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Code2, Users } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "800+ DSA Problems Solved",
    desc: "Consistent problem-solving on LeetCode and GeeksforGeeks across arrays, trees, graphs, and dynamic programming.",
  },
  {
    icon: Users,
    title: "Core Coordinator – SCOIT",
    desc: "Led technical events and workshops as Core Coordinator of the SCOIT Technical Club at BIET Jhansi.",
  },
  {
    icon: Award,
    title: "Internship Completion",
    desc: "Successfully completed a Web Development internship at AD Infocom Systems with commendation.",
  },
];

export default function Achievements() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="achievements" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
