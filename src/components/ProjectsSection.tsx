import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  { title: "TaskFlow", category: "SaaS Platform · React + Node.js", image: project1 },
  { title: "ShopVault", category: "E-Commerce · Next.js + Stripe", image: project2 },
  { title: "DataPulse", category: "Analytics Dashboard · D3 + PostgreSQL", image: project3 },
  { title: "ConnectHub", category: "Real-Time Chat · Socket.io + Redis", image: project4 },
  { title: "HealthSync", category: "Healthcare App · React Native + AWS", image: project5 },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className="label-caps text-muted-foreground">● Selected Work</span>
      </motion.div>

      {/* Spaced letter heading like the original */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="display-section text-[clamp(2rem,6vw,5rem)] text-foreground mb-16"
      >
        Many
        <br />
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`group cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div className={`image-reveal ${i === 0 ? "h-[50vh] md:h-[70vh]" : "h-[40vh] md:h-[55vh]"}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <span className="label-caps text-muted-foreground">{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
