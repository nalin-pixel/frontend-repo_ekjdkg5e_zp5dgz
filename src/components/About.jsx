import { BadgeCheck } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200">
    <BadgeCheck className="h-4 w-4 text-emerald-500" /> {label}
  </span>
);

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            About Me
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I'm Agustinus Pardamean Lumban Tobing, a Front-End Developer who loves building
            interactive, accessible, and performant web interfaces. I focus on clean architecture,
            component-driven development, and delightful user experiences.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            My toolkit includes modern frameworks, design systems, and end-to-end best practices
            from prototyping to production.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tech Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'HTML', 'CSS (Tailwind, SCSS)', 'JavaScript', 'React.js', 'Next.js', 'Vue.js',
              'API Integration', 'Responsive Design', 'Git', 'Docker'
            ].map((t) => <SkillTag key={t} label={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
