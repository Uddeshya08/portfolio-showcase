import { motion } from "framer-motion";

const skills = [
  { title: "React & Next.js", description: "Dynamic, component-driven user interfaces" },
  { title: "Node.js & Express", description: "Robust server-side APIs and microservices" },
  { title: "TypeScript", description: "Type-safe code for maintainable applications" },
  { title: "PostgreSQL & MongoDB", description: "Relational and document database design" },
  { title: "Cloud & DevOps", description: "AWS, Docker, CI/CD pipelines" },
  { title: "REST & GraphQL", description: "Clean, well-documented API architecture" },
  { title: "UI/UX Design", description: "Pixel-perfect interfaces with Tailwind & Figma" },
  { title: "Testing & QA", description: "Unit, integration, and end-to-end testing" },
];

const SkillsSection = () => {
  return (
    <section id="services" className="px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="label-caps text-muted-foreground">● Tech Stack</span>
        <h2 className="display-section text-[clamp(2rem,6vw,5rem)] text-foreground mt-4">
          Full Stack,
          <br />
          Full Control
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background p-6 md:p-8 group cursor-default"
          >
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:opacity-50 transition-opacity">
              {skill.title}
            </h3>
            <p className="body-refined text-sm text-muted-foreground mt-2">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
