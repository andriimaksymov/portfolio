export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Andrii Maksymov. Built with precision.</div>
        <div>React · TypeScript · Vite</div>
      </div>
    </footer>
  );
}
