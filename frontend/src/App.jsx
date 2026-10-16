
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SceneGallery from "./components/SceneGallery";
import Pipeline from "./components/Pipeline";
import MetricsTable from "./components/MetricsTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Hero />
        <SceneGallery />
        <Pipeline />
        <MetricsTable />
      </main>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Footer />
      </div>
    </div>
  );
}
