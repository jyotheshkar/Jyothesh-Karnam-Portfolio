import Dashboard from "@/app/components/Dashboard";
import Education from "@/app/components/Education";
import Awards from "@/app/components/Awards";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Dashboard />
      <Education />
      <Awards />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}
