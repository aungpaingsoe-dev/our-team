import Image from "next/image";
import { Github, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
  {
    name: "Aung Paing Soe",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: "/profile1.webp",
    socials: {
      instagram: "https://instagram.com/aungpaingsoe",
      github: "https://github.com/aungpaingsoe",
      twitter: "https://twitter.com/aungpaingsoe",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <TeamItem key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamItem({
  name,
  role,
  bio,
  image,
  socials,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    instagram: string;
    github: string;
    twitter: string;
  };
}) {
  return (
    <div className="bg-white border rounded-md hover:border-black">
      <div className="p-6 flex flex-col items-center text-center">
        <Image
          width={120}
          height={120}
          alt={name}
          src={image || "/placeholder.svg"}
          className="w-[120px] h-[120px] rounded-full object-cover mb-4"
        />
        <h3 className="font-bold text-xl text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <ul className="flex gap-4 text-gray-600">
          <li>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </li>
          <li>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
