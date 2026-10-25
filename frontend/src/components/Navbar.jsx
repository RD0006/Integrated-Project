
import { Box } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-mint/50 bg-mint/10 text-mint">
            <Box size={23} strokeWidth={1.5} />
          </span>
          <span>
            <strong className="block font-display text-base tracking-[0.16em]">
              SPLATLAB
            </strong>
            <small className="block font-mono text-[9px] tracking-wider text-muted">
              3D RECONSTRUCTION LAB
            </small>
          </span>
        </a>

        <nav className="flex items-center gap-4 text-xs text-slate-300 sm:gap-7 sm:text-sm">
            
          <a className="transition hover:text-mint" href="#gallery">Scenes</a>
          <a className="transition hover:text-mint" href="#metrics">Metrics</a>
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[12px] tracking-wider text-mint lg:flex">
          <span className="h-2 w-2 rounded-full bg-mint" />
            Explore the Code
        </div>
      </div>
    </header>
  );
}
