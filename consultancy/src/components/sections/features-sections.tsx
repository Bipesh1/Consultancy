import { Award, BookA, BookOpen, BookOpenCheck, Landmark, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

const features = [
  {
    icon: <BookA />,
    title: "College and University Admission",
    description: "College and university admission process can be simplified with guidance.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <Award />,
    title: "Scholarship Assistance",
    description: "Scholarship assistance provides financial support for education.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: <Landmark />,
    title: "Financial Documentation Guidance",
    description: "Financial documentation guidance helps with proper documentation procedures.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: <BookOpen />,
    title: "Career Counselling",
    description: "Our Education Counsellors will learn about your career aspirations.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: <Phone />,
    title: "Visa Services",
    description: "Visa services assist with obtaining necessary visa for travel.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: <BookOpenCheck />,
    title: "Test Preparation Classes",
    description: "Test preparation classes enhance test-taking skills for exams.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
];

function FeatureCard({ feature}: { feature: (typeof features)[0]; index: number }) {


  // const IconComponent = LucideIcons[feature.icon];

  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-background p-8 hover:shadow-lg transition-all">
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", feature.color)}>
        {/* {IconComponent && <IconComponent className="h-6 w-6" />} */}
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-muted/10 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Discover the <span className="text-blue-900">Nepal Education</span> Advantage
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Make your study abroad journey hassle-free with our range of services. Schedule your free career counselling session</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}