import { useEffect, useState } from "react";
import { ArrowDown, Github, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["MERN Stack Developer", "Software Developer", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-24">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          Avinash Kumar
        </h1>
        <div className="h-10 md:h-12 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-medium text-muted-foreground">
            {text}
            <span className="border-r-2 border-primary ml-1 animate-typing-cursor">&nbsp;</span>
          </span>
        </div>
        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Building scalable web solutions with clean code and modern technologies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="gap-2"
          >
            Hire Me
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="https://github.com/avinashkumar014" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> View GitHub
            </a>
          </Button>
          <Button variant="secondary" size="lg" className="gap-2">
            <a href="https://drive.google.com/file/d/16nlBREvcN3rcQxr3GEetwYTY9NPnVLmb/view" target="_blank" rel="noopener noreferrer"> 
            <FileDown className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 inline-flex animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
