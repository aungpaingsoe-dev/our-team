import {  ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully responsive online store with integrated payment systems.",
    image:
      "/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative tool for teams to manage projects and tasks efficiently.",
    image: "/maturity_stage_15.jpg",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "An iOS and Android app for tracking workouts and nutrition.",
    image: "/Tiny programmers on big laptop writing script.jpg",
    tags: ["React Native", "Firebase"],
    link: "",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Projects
        </h2>
        <div className="grid grid-cols-2 gap-14">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) {
  return (
    <div >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[250px] object-cover border rounded-sm"
      />
      <div>
        <div className="mt-3">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex justify-between items-center">
            {title}
            <div className="cursor-pointer p-1 rounded-full bg-slate-100 hover:bg-slate-200">
              <ArrowRight />
            </div>
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-sm text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
