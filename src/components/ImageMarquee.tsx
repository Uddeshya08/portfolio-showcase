import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const images = [hero1, project1, project2, project3, project4, project5];

const ImageMarquee = () => {
  return (
    <section className="py-8 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1800] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-4"
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] h-[220px] image-reveal">
            <img src={img} alt="Portfolio work" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageMarquee;
