import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-lg p-6 min-w-[300px] md:min-w-[400px]"
    >
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < review.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-foreground font-poppins mb-4 italic">
        "{review.comment}"
      </p>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-poppins font-semibold">{review.name}</p>
          <p className="text-muted-foreground text-sm font-poppins">
            {review.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

