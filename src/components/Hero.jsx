import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  // ensure the canvas fills parent
  useEffect(() => {
    // no-op, reserved for future side effects if needed
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
            alt="Agustinus Pardamean Lumban Tobing"
            className="mb-6 h-28 w-28 rounded-full border-4 border-white/70 shadow-xl object-cover"
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Agustinus Pardamean Lumban Tobing
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            Front-End Developer | Building Interactive, Scalable Web Experiences
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Agustinus_P_L_Tobing_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
