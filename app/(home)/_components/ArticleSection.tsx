import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    id: 4,
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
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Latest Articles
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {articles.map((article) => (
              <CarouselItem
                key={article.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ArticleItem key={article.id} {...article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
    <div className="bg-white border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[200px] p-3 object-cover"
      />
      <div className="p-3">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 h-[60px] ">{title}</h3>
        <p className="text-gray-600 mb-4 h-[70px] ">{excerpt}</p>
        <div className="flex flex-col gap-1 text-sm text-gray-500 mb-4">
          <span className=" font-bold ">{author}</span>
          <div className=" flex text-sm gap-1 items-center ">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {new Date(date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
