import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-12 py-24">
      <div className="section-divider mb-16" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="label-caps text-muted-foreground">● Let's Build Something</span>
        <h2 className="display-massive text-[clamp(2.5rem,8vw,8rem)] text-foreground mt-6">
          LET'S
          <br />
          CONNECT
        </h2>
        <a
          href="mailto:dev@yourname.com"
          className="inline-block mt-10 font-body text-lg text-foreground border-b border-foreground pb-1 hover:opacity-50 transition-opacity"
        >
          dev@yourname.com
        </a>
      </motion.div>

      <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="label-caps text-muted-foreground">© 2026 Studio. All rights reserved.</span>
        <div className="flex gap-8">
          {["Instagram", "Dribbble", "LinkedIn", "Twitter"].map((social) => (
            <a key={social} href="#" className="nav-link">
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
