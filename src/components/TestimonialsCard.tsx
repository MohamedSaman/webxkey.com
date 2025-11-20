import React from "react";
import { motion } from "framer-motion";

const Profile1 = "/Images/profile 1.png";
const Profile2 = "/Images/profile 2.png";
const Profile3 = "/Images/profile 3.png";
const Profile4 = "/Images/profile 4.png";
const Profile5 = "/Images/profile 5.png";
const Profile6 = "/Images/profile 6.png";

const testimonials = [
  {
    name: "Ishak Muhammathu Wazeem",
    company: "Tampa Bay Watersofteners",
    image: Profile1,
    review:
      "They create high-quality websites with exceptional performance for me. Thank you again for your service!",
  },
  {
    name: "Jessica Lee",
    company: "StyleFusion",
    image: Profile2,
    review:
      "Thanks to Webxkey, our social media engagement soared and our brand visibility improved tremendously.",
  },
  {
    name: "James Mawer",
    company: "360 Food Partners",
    image: Profile3,
    review:
      "Webxkey SEO and content marketing expertise boosted our search rankings and organic traffic noticeably.",
  },
  {
    name: "Anonymous",
    company: "Business Owner",
    image: Profile4,
    review:
      "Working with Webxkey was the best decision. Their digital marketing solutions increased our online sales significantly.",
  },
  {
    name: "Anonymous",
    company: "Company",
    image: Profile5,
    review:
      "Webxkey's innovative strategies helped us reach a wider audience and achieve our business goals quickly.",
  },
  {
    name: "Anonymous",
    company: "Brand Manager",
    image: Profile6,
    review:
      "The results from Webxkey services are impressive. Their dedication has truly elevated our brand.",
  },
];

type Testimonial = {
  name: string;
  company: string;
  image: string;
  review: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex mb-3">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-400 text-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.05,
                type: "spring",
              }}
            >
              ★
            </motion.span>
          ))}
      </div>
      <p className="mb-4">{testimonial.review}</p>
      <div className="flex items-center gap-3">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          viewport={{ once: false }}
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsCard: React.FC = () => {
  return (
    <motion.div
      className="bg-transparent py-20 px-5 mt-[-40px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCard;
