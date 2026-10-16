
import {
  Images,
  ScanSearch,
  Cpu,
  MonitorPlay,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Multi-view input",
    subtitle: "Dataset images",
    detail: "Collect photographs from different camera viewpoints.",
    Icon: Images,
  },
  {
    id: "02",
    title: "Camera estimation",
    subtitle: "COLMAP / camera poses",
    detail: "Estimate camera positions and scene structure.",
    Icon: ScanSearch,
  },
  {
    id: "03",
    title: "Gaussian optimization",
    subtitle: "3DGS training",
    detail: "Optimize Gaussian primitives using the training images.",
    Icon: Cpu,
  },
  {
    id: "04",
    title: "Scene visualization",
    subtitle: "Interactive viewer",
    detail: "Render new viewpoints and explore the reconstruction.",
    Icon: MonitorPlay,
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="scroll-mt-28 border-y border-line bg-panel/50 py-16 sm:py-20">
      <div className="mb-8">
        <span className="font-mono text-[10px] tracking-widest text-mint">
          03 / SYSTEM WORKFLOW
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Reconstruction pipeline
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          From raw multi-view images to a navigable 3D scene, each stage
          contributes to the final Gaussian representation.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {steps.map(({ id, title, subtitle, detail, Icon }, index) => (
          <div key={id} className="relative border border-line bg-ink p-5">
            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-xs text-amber">{id}</span>
              <Icon size={21} strokeWidth={1.5} className="text-mint" />
            </div>

            <h3 className="font-display text-base font-medium">{title}</h3>
            <p className="mt-2 font-mono text-[10px] text-mint">{subtitle}</p>
            <p className="mt-4 text-xs leading-6 text-slate-400">{detail}</p>

            {index < steps.length - 1 && (
              <ArrowDown
                size={15}
                className="absolute -bottom-[9px] left-1/2 z-10 rotate-[-90deg] text-mint md:-right-[9px] md:left-auto md:top-1/2 md:rotate-[-90deg]"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] tracking-wide text-muted">
        <span>INPUT / IMAGES + CAMERA DATA</span>
        <span>PROCESS / GPU TRAINING</span>
        <span>OUTPUT / GAUSSIAN PLY</span>
      </div>
    </section>
  );
}
