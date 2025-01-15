import NavBar from "./_components/NavBar";
import IntroSection from "./_components/IntroSection";
import TeamSection from "./_components/TeamSection";
import ServiceSection from "./_components/ServiceSection";
import { ProjectsSection } from "./_components/projectSection";
import ArticlesSection from "./_components/ArticleSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=" w-[75%] mx-auto ">
        <IntroSection />
        <TeamSection />
        <ServiceSection />
        <ProjectsSection />
        <ArticlesSection />
      </main>
    </>
  );
}
