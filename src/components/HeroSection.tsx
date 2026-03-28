import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center w-full max-w-[1400px]"
      >
        <h1 className="display-massive text-[clamp(3rem,12vw,12rem)] text-foreground">
          CRAFTING
        </h1>
        <h1 className="display-massive text-[clamp(3rem,12vw,12rem)] text-foreground">
          DIGITAL
        </h1>
        <h1 className="display-massive text-[clamp(3rem,12vw,12rem)] text-foreground">
          EXPERIENCES
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-foreground" />
        <span className="label-caps text-muted-foreground">Portfolio & Services</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 max-w-2xl text-center display-section text-[clamp(1.2rem,3vw,2.2rem)] text-foreground"
      >
        Precision design.{" "}
        <span className="text-muted-foreground">Bold vision.</span>
        <br />
        Powered by creativity,{" "}
        <span className="text-muted-foreground">technology & craft.</span>
      </motion.p>
    </section>
  );
};

export default HeroSection;
