export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Andrii Maksymov</div>
        <div>Built with React, TypeScript &amp; Vite</div>
      </div>
    </footer>
  );
}
