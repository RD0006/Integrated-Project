
import { Activity } from "lucide-react";
import { scenes } from "../data/scenes";

const columns = [
  { key: "iterations", label: "ITERATIONS" },
  { key: "resolution", label: "RESOLUTION" },
  { key: "psnr", label: "PSNR ↑" },
  { key: "ssim", label: "SSIM ↑" },
  { key: "lpips", label: "LPIPS ↓" },
];

export default function MetricsTable() {
  return (
    <section id="metrics" className="scroll-mt-28 py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Performance matrix
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Quantitative comparison across reconstructed scenes.
          </p>
        </div>

      </div>

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-raised font-mono text-[10px] tracking-wide text-slate-300">
            <tr>
              <th className="px-4 py-4">SCENE</th>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-4">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {scenes.map((scene) => (
              <tr
                key={scene.id}
                className="border-t border-line/80 bg-panel transition hover:bg-raised/70"
              >
                <td className="px-4 py-4">
                  <span className="mr-3 font-mono text-[10px] text-amber">
                    {scene.id}
                  </span>
                  <span className="font-medium text-slate-200">{scene.name}</span>
                </td>

                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-4 py-4 font-mono text-xs ${
                      scene[column.key] ? "text-mint" : "text-slate-600"
                    }`}
                  >
                    {scene[column.key] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-wrap gap-y-2 align-center justify-between text-[12px]">
        <span>PSNR | Peak Signal-to-Noise Ratio</span>
        <span>SSIM | Structural Similarity</span>
        <span>LPIPS | Perceptual Distance</span>
      </div>
    </section>
  );
}
