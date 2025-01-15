import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt:
      "Exploring upcoming trends and technologies shaping the web development landscape.",
    image: "/images.jpeg",
    author: "Jane Doe",
    date: "2023-05-15",
    readTime: "5 min read",
    link: "/blog/future-of-web-development",
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    excerpt:
      "Learn advanced techniques to boost your React application's performance.",
    image: "/images.png",
    author: "John Smith",
    date: "2023-05-10",
    readTime: "8 min read",
    link: "/blog/optimizing-react-performance",
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    excerpt:
      "A beginner's guide to using TypeScript in your JavaScript projects.",
    image: "/tile_reg.jpg",
    author: "Alice Johnson",
    date: "2023-05-05",
    readTime: "6 min read",
    link: "/blog/introduction-to-typescript",
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-16  from-white to-gray-50">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticleItem({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  link,
}: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full  h-[200px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex flex-col gap-1 text-sm text-gray-500 mb-4">
          <span className="mr-4">{author}</span>
          <span className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            {new Date(date).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </span>
        </div>
        <Link
          href={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read More
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
