import { Globe, TabletSmartphone, Server } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description: "Creating web applications with API integration",
      icon: <Globe size={34} />,
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications",
      icon: <TabletSmartphone size={34} />,
    },
    {
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure",
      icon: <Server size={34} />,
    },
  ];

  return (
    <section className="py-16  from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
