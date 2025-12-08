import { StarIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { serviceFeatures } from "@/sections/services/_constants/services";

import { ServiceCard as Card } from "./_components/service-card";

export default function Services() {
  return (
    <Section
      id="services"
      title="End-to-End Product Development Services"
      description="I work with founders to validate concepts and build production-ready MVPs using React, TypeScript, Node.js, Tailwind, and lightweight modern frameworks."
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      badgeText="Services"
      badgeIcon={<StarIcon aria-hidden="true" />}
    >
      {serviceFeatures.map((feature) => {
        const featureId = `service-title-${feature.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`;

        return (
          <Card key={feature.name} {...feature} aria-labelledby={featureId} />
        );
      })}
    </Section>
  );
}
