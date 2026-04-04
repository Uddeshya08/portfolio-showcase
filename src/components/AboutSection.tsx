import { motion } from "framer-motion";
import aboutImg from "@/assets/about.png";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="order-first">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps text-muted-foreground">● About Me</span>
            <h2 className="display-section text-[clamp(2rem,5vw,4rem)] leading-normal md:leading-relaxed text-foreground mt-4 mb-6">
              Engineer By Trade, Creator By Instinct
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="image-reveal h-[60vh] my-8"
          >
            <img src={aboutImg} alt="About the studio" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="body-refined text-muted-foreground text-lg max-w-lg">
              I'm a full stack developer with 5+ years of experience building web applications
              from the ground up. I specialize in React, Node.js, and cloud infrastructure —
              turning complex problems into elegant, performant solutions.
            </p>
            <p className="body-refined text-muted-foreground text-lg max-w-lg mt-6">
              Whether it's architecting a database schema, designing a responsive UI, or deploying
              to production — I own the entire stack. Clean code, tested thoroughly, shipped fast.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-20 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-caps text-muted-foreground">● About Me</span>
          <h2 className="display-section text-[clamp(2rem,5vw,4rem)] leading-normal md:leading-relaxed text-foreground mt-4 mb-6">
            Engineer By Trade, Creator By Instinct
          </h2>
          <p className="body-refined text-muted-foreground text-lg max-w-lg">
            I'm a full stack developer with 5+ years of experience building web applications
            from the ground up. I specialize in React, Node.js, and cloud infrastructure —
            turning complex problems into elegant, performant solutions.
          </p>
          <p className="body-refined text-muted-foreground text-lg max-w-lg mt-6">
            Whether it's architecting a database schema, designing a responsive UI, or deploying
            to production — I own the entire stack. Clean code, tested thoroughly, shipped fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="image-reveal h-[75vh]"
        >
          <img src={aboutImg} alt="About the studio" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
