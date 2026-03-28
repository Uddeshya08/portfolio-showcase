import { motion } from "framer-motion";
import { useState } from "react";

const getRandomBrightColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(80 + Math.random() * 20);
  const lightness = Math.floor(50 + Math.random() * 20);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const HeroSection = () => {
  const [hoverColor, setHoverColor] = useState<string>("");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center w-full max-w-[90vw] md:max-w-[1400px]"
      >
        <h1
          onMouseEnter={() => setHoverColor(getRandomBrightColor())}
          onMouseLeave={() => setHoverColor("")}
          className="display-massive text-[clamp(3rem,20vw,10rem)] leading-relaxed md:leading-[1.00] cursor-pointer"
          style={{ color: hoverColor || undefined }}
        >
          BUILDING
        </h1>
        <h1
          onMouseEnter={() => setHoverColor(getRandomBrightColor())}
          onMouseLeave={() => setHoverColor("")}
          className="display-massive text-[clamp(3rem,20vw,10rem)] leading-relaxed md:leading-[1.00] cursor-pointer"
          style={{ color: hoverColor || undefined }}
        >
          THE
        </h1>
        <h1
          onMouseEnter={() => setHoverColor(getRandomBrightColor())}
          onMouseLeave={() => setHoverColor("")}
          className="display-massive text-[clamp(3rem,20vw,10rem)] leading-relaxed md:leading-[1.00] cursor-pointer"
          style={{ color: hoverColor || undefined }}
        >
          FUTURE
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-foreground" />
        <span className="label-caps text-muted-foreground">Full Stack Developer</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 max-w-2xl text-center display-section text-[clamp(1.2rem,3vw,2.2rem)] leading-tight md:leading-relaxed text-foreground"
      >
        Clean code.{" "}
        <span className="text-muted-foreground">Scalable systems.</span>
        <br />
        From frontend pixels{" "}
        <span className="text-muted-foreground">to backend logic.</span>
      </motion.p>
    </section>
  );
};

export default HeroSection;
