import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-caps text-muted-foreground">● About</span>
          <h2 className="display-section text-[clamp(2rem,5vw,4rem)] text-foreground mt-4 mb-8">
            Our Edge: An Alliance Between Tech & Sensitivity
          </h2>
          <p className="body-refined text-muted-foreground text-lg max-w-lg">
            We combine cutting-edge technologies with human intuition to create visual content
            that is both precise and emotional. Our work sits at the intersection of
            design, development, and creative direction.
          </p>
          <p className="body-refined text-muted-foreground text-lg max-w-lg mt-6">
            Each project follows a structured production framework while remaining guided
            by artistic intent. This balance allows us to deliver scalable, premium-quality work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="image-reveal h-[60vh] md:h-[75vh]"
        >
          <img src={aboutImg} alt="About the studio" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
