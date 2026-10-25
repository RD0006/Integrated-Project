
import { ArrowUp, Box } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-8 pb-10">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-mint/40 bg-mint/10 text-mint">
            <Box size={19} />
          </span>
          <span>
            <strong className="block font-display text-sm tracking-[0.15em]">
              SplatLab
            </strong>
            <small className="font-mono text-[9px] text-muted">
              3D RECONSTRUCTION LAB
            </small>
          </span>
        </a>

        <a
          href="#home"
          className="inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-wider text-mint transition hover:text-amber sm:self-auto"
        >
          BACK TO TOP <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
