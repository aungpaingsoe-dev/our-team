import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-16  from-gray-50 to-white">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-6">
        <div className=" h-[170px] ">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="  inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          View Project
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}
