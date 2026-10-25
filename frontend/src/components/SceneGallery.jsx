
import { Grid3X3 } from "lucide-react";
import { scenes } from "../data/scenes";
import SceneCard from "./SceneCard";

export default function SceneGallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-20 border-b border-line">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Reconstruction gallery
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Browse the dataset and open available interactive viewers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {scenes.map((scene) => (
          <SceneCard key={scene.id} scene={scene} />
        ))}
      </div>
    </section>
  );
}
