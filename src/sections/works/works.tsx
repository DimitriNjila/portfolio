import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
  return (
    <Section
      id="works"
      title="Project Highlights"
      description="A look at real case studies that showcase my range across product development and creative engineering"
      className="grid grid-cols-1 gap-4"
      badgeText="Featured projects"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
          color={item.color}
        />
      ))}
    </Section>
  );
}
