
import { ArrowUp, Box } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-mint/40 bg-mint/10 text-mint">
            <Box size={19} />
          </span>
          <span>
            <strong className="block font-display text-sm tracking-[0.15em]">
              SPLATLAB
            </strong>
            <small className="font-mono text-[9px] text-muted">
              3D RECONSTRUCTION LAB
            </small>
          </span>
        </a>

        <p className="max-w-md text-xs leading-6 text-slate-400">
          An academic exploration of 3D Gaussian Splatting, scene
          reconstruction, and visual computing.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 self-start font-mono text-[10px] tracking-wider text-mint transition hover:text-amber sm:self-auto"
        >
          BACK TO TOP <ArrowUp size={14} />
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-line py-5 font-mono text-[9px] tracking-wide text-muted sm:flex-row sm:justify-between">
        <span>PROJECT / 3D SCENE RECONSTRUCTION</span>
        <span>DATASET / MIP-NE RF 360</span>
        <span>BUILT FOR EXPERIMENTATION.</span>
      </div>
    </footer>
  );
}
