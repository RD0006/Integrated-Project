import { useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";

export default function SceneCard({ scene }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <article className="group min-w-0 overflow-hidden rounded-4xl border border-line bg-panel transition duration-200 hover:-translate-y-1 hover:border-mint/60">
        {/* Scene Thumbnail */}
        <div className="relative h-60 overflow-hidden">
          <img
            src={scene.image}
            alt={`${scene.name} scene thumbnail`}
            className="absolute h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Scene Details and Actions */}
        <div className="flex items-center justify-between gap-4 border-t border-line p-4 pb-6">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-medium">
              {scene.name}
            </h3>

            <div className="mt-1 text-[11px] tracking-wide text-muted">
              {scene.type} | {scene.category}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {/* View Video Button */}
            {scene.video && (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label={`View ${scene.name} video`}
                className="flex items-center gap-1.5 cursor-pointer border border-mint/50 px-3 py-2 text-xs text-mint transition hover:bg-mint hover:text-ink"
              >
                <Play size={14} />
                <span>View Video</span>
              </button>
            )}

            {/* Interactive Viewer Link */}
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
        </div>
      </article>

      {/* Video Popup Modal */}
      {videoOpen && scene.video && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${scene.name} reconstruction video`}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 border-b border-line p-4">
              <div>
                <h2 className="font-display text-lg font-medium">
                  {scene.name}
                </h2>

                <p className="mt-1 text-xs text-muted">
                  Gaussian Splatting · Orbit Video
                </p>
              </div>

              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="grid h-9 w-9 shrink-0 place-items-center cursor-pointer border border-line text-muted transition hover:border-mint hover:text-mint"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player */}
            <video
              key={scene.video}
              src={scene.video}
              controls
              autoPlay
              playsInline
              className="max-h-[75vh] w-full bg-black"
            >
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}