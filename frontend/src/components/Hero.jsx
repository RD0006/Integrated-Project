
import { ArrowDownRight, ChartNoAxesCombined } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="grid gap-10 pt-10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center border-b border-line">
      <div>

        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-5xl xl:text-5xl">
          Reconstructing Reality
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
          Explore our photorealistic 3D scene reconstruction done using 3D Gaussian Splatting. This objectives of this project are to transform calibrated multi-view images into navigable scene representations whilst maintaining reconstruction quality, and fast novel-view rendering.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href="#gallery"
            className="inline-flex items-center gap-3 bg-mint px-5 py-3 text-sm font-semibold text-ink transition"
          >
            Explore scenes <ArrowDownRight size={17} />
          </a>
          <a
            href="#metrics"
            className="inline-flex items-center gap-3 border border-line px-5 py-3 text-sm text-slate-200 transition hover:border-mint"
          >
            View evaluation <ChartNoAxesCombined size={16} />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden border border-line bg-panel p-7 sm:p-10 rounded-4xl">
        <div className="absolute right-0 top-0 h-20 w-20 border-r border-t border-mint/40" />

        <div className="p-2">
            <img src = "https://preview.free3d.com/img/2015/11/2167714034818746281/yopexu7j.jpg" className="h-55"/>
        </div>

        <div className="border-t border-line p-5 flex items-center justify-between g-2">
          <div>
            <span className="block font-mono text-[12px] text-muted">METHOD</span>
            <strong className="mt-1 block text-slate-200">3DGS</strong>
          </div>
          <div>
            <span className="block font-mono text-[12px] text-muted">DATASET</span>
            <strong className="mt-1 block text-slate-200">Mip-NeRF 360</strong>
          </div>
          <div>
            <span className="block font-mono text-[12px] text-muted">SCENES</span>
            <strong className="mt-1 block text-amber">09</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
