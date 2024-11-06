// components
import Circles from '../../components/Circles'; // Исправление пути

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Skontaktuj się z <span className="text-accent">nami.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Imię Nazwisko" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />

            {/* phone number input */}
            <input
              type="tel"
              placeholder="Telefon (+48...)"
              className="input"
              pattern="^(\+48)?[0-9]{9}$"
              title="Please enter a valid phone number starting with +48, followed by 9 digits"
            />

            <textarea placeholder="Opisz krótko sytuację" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {`Let's talk`}
              </span>
              <BsArrowRight className="absolute text-[22px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 -translate-y-[120%] transition-all duration-300" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
