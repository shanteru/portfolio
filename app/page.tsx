import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import RecentProject from "@/components/section/RecentProject";
import Services from "@/components/section/Services";


export default function Home() {
  return (
   <main>
    <Hero/>
    <About/>
    <Services/>
    <RecentProject/>
   </main>
  );
}
