import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Layers, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, label: "DSA Problems", value: "1000+" },
  { icon: Layers, label: "Projects Built", value: "20+" },
  { icon: Trophy, label: "Expertise", value: "MERN Stack" },
];

export default function About() {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border bg-secondary">
              <img
                src="/image.jpeg"
                alt="Profile photo"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a B.Tech graduate in Information Technology from BIET Jhansi with a strong foundation in
              Java, Data Structures & Algorithms, and full-stack web development. I specialize in building
              scalable and user-focused web applications using the MERN stack and enjoy solving complex
              problems, having solved 1000+ DSA problems across LeetCode and GeeksforGeeks.
            </p>

           <p className="text-muted-foreground leading-relaxed mb-8">
              With hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, and AI
              integrations, I focus on writing clean, maintainable code and developing practical solutions
              that deliver a seamless user experience. I'm passionate about continuous learning and
              building impactful software products.
           </p>


            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
