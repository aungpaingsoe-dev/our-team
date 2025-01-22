import NavBar from "./_components/NavBar";
import IntroSection from "./_components/IntroSection";
import TeamSection from "./_components/TeamSection";
import ServiceSection from "./_components/ServiceSection";
import { ProjectsSection } from "./_components/projectSection";
import ArticlesSection from "./_components/ArticleSection";
import ContactSection from "./_components/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=" w-[95%] lg:w-[65%] mx-auto ">
        <IntroSection />
        <TeamSection />
        <ServiceSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </>
  );
}
