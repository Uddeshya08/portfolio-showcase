import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "segun292",
    rating: 5,
    text: "Amazing amazing amazing! Great working with him and look forward to continue this partnership.",
    date: "5 years ago"
  },
  {
    id: 2,
    name: "omarfeliz",
    rating: 5,
    text: "Wonderful job! Thank you!",
    date: "6 years ago"
  },
  {
    id: 3,
    name: "jacqueline333",
    rating: 5,
    text: "Pleasant Young Men. Very Satisfy. Will Hire again.",
    date: "6 years ago"
  },
  {
    id: 4,
    name: "nkhay12",
    rating: 5,
    text: "Good at listening to requirements and changes needed. Thank you and would hire again!",
    date: "6 years ago"
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className="label-caps text-muted-foreground">● Client Reviews</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="display-section text-[clamp(2rem,6vw,5rem)] text-foreground mb-16"
      >
        What Clients
        <br />
        Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-transparent backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span className="text-yellow-400 text-lg font-bold mr-2">
                {"★".repeat(review.rating)}
              </span>
              <span className="text-sm text-muted-foreground">
                {review.rating}/5 • {review.date}
              </span>
            </div>
            <p className="text-foreground mb-4 italic">"{review.text}"</p>
            <div className="flex justify-between items-end">
              <p className="font-semibold text-foreground">- {review.name}</p>
              <span className="text-xs text-muted-foreground">source: fiverr</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;