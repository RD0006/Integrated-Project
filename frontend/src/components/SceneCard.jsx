
import { ArrowUpRight, Box } from "lucide-react";

export default function SceneCard({ scene }) {
  return (
    <article className="group min-w-0 border border-line bg-panel transition duration-200 hover:-translate-y-1 hover:border-mint/60">
      <div className="relative h-44 overflow-hidden bg-[#202b2e] sm:h-48">
        <img
          src={scene.image}
          alt={`${scene.name} scene thumbnail`}
          className="absolute inset-0 z-100 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        

        <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center border border-white/20 bg-ink/90 font-mono text-[10px] text-mint">
          {scene.id}
        </span>
        <span className="absolute right-3 top-3 max-w-[75%] bg-ink/90 px-2 py-1 font-mono text-[8px] tracking-wide text-slate-300">
          {scene.category}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium">{scene.name}</h3>
          <p className="mt-1 text-[11px] text-muted">Gaussian scene reconstruction</p>
        </div>

        {scene.viewerUrl ? (
          <a
            href={scene.viewerUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${scene.name} interactive viewer`}
            className="grid h-9 w-9 shrink-0 place-items-center border border-mint/50 text-mint transition hover:bg-mint hover:text-ink"
          >
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <span
            className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center border border-line text-muted/50"
          >
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>

      <div className="flex justify-between gap-2 border-t border-line px-4 py-3 font-mono text-[8px] tracking-wide text-muted">
        <span>3DGS / MIPNERF360</span>
        <span className={scene.viewerUrl ? "text-mint" : "text-amber"}>
          {scene.viewerUrl ? "VIEW SCENE" : "LINK PENDING"}
        </span>
      </div>
    </article>
  );
}
