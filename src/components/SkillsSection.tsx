import { motion } from "framer-motion";

const skills = [
  { title: "UI/UX Design", description: "Interfaces that balance beauty with usability" },
  { title: "Brand Identity", description: "Visual systems that define and distinguish" },
  { title: "Web Development", description: "Performant, responsive digital products" },
  { title: "Motion Design", description: "Animation that brings stories to life" },
  { title: "Art Direction", description: "Creative vision across every touchpoint" },
  { title: "3D & CGI", description: "Dimensional worlds, rendered with precision" },
  { title: "Photography", description: "Editorial imagery with emotional depth" },
  { title: "Strategy", description: "Insights that shape impactful creative work" },
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
        <span className="label-caps text-muted-foreground">● Services</span>
        <h2 className="display-section text-[clamp(2rem,6vw,5rem)] text-foreground mt-4">
          A Dedicated Team,
          <br />
          A United Vision
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
