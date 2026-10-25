
import { ArrowUpRight, Box } from "lucide-react";

export default function SceneCard({ scene }) {
  return (
    <article className="group min-w-0 border rounded-4xl border-line bg-panel transition duration-200 hover:-translate-y-1 hover:border-mint/60">

      


      <div className="relative overflow-hidden h-60">
        <img
          src={scene.image}
          alt={`${scene.name} scene thumbnail`}
          className="absolute h-full rounded-t-4xl object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        
      </div>

      <div className="flex items-center border-t border-line justify-between gap-5 p-4 pb-6">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium">{scene.name}</h3>
          <div className="mt-1 text-[11px] text-muted tracking-wide">
            {scene.type} | {scene.category}
          </div>
          
        </div>

        <a
            href={scene.viewerUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${scene.name} interactive viewer`}
            className="grid h-9 w-9 shrink-0 place-items-center border border-mint/50 text-mint transition hover:bg-mint hover:text-ink"
          >
            <ArrowUpRight size={18} />
          </a>

      </div>
    </article>
  );
}
