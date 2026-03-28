import { motion } from "framer-motion";
import claudeLogo from "@/assets/claude-logo.png";
import chatgptLogo from "@/assets/chatgpt-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import copilotLogo from "@/assets/copilot-logo.jpg";
import geminiLogo from "@/assets/gemini-logo.png";
const AILogosMarquee = () => {
  const logos = [
    { name: "Claude", src: claudeLogo },
    { name: "ChatGPT", src: chatgptLogo },
    { name: "Lovable", src: lovableLogo },
    { name: "Copilot", src: copilotLogo },
    { name: "Gemini", src: geminiLogo }

  ];

  return (
    <section className="py-4 overflow-hidden bg-muted/30">
      <motion.div
        animate={{ x: [1200, -1200] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-16"
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
            <img
              src={logo.src}
              alt={logo.name}
              className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AILogosMarquee;