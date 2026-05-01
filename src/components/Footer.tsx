export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} 2026 Avinash Kumar | MERN Stack Developer | Open to Work
        </p>
      </div>
    </footer>
  );
}
