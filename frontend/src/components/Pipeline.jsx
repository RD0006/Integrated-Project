
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
    <section id="pipeline" className="scroll-mt-10 border-b border-line bg-panel/50 py-16 sm:py-20">
      <div className="mb-8">
        <h2 className="mt-3 font-display text-xl font-medium tracking-tight sm:text-2xl">
          Reconstruction pipeline
        </h2>
        <p className="mt-3 text-sm leading-7">
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
    </section>
  );
}
