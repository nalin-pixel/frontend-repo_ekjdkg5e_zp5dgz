import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Company Profile Website',
    image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb21wYW55JTIwUHJvZmlsZSUyMFdlYnNpdGV8ZW58MHwwfHx8MTc2MjUxODM5NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'A modern, responsive company profile with SEO and animation.',
    demo: 'https://example.com/company',
    repo: 'https://github.com/agus/company-profile',
    tags: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Analytics Web Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBXZWIlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjUxODM5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Interactive dashboard with charts and role-based access.',
    demo: 'https://example.com/dashboard',
    repo: 'https://github.com/agus/web-dashboard',
    tags: ['Next.js', 'Chart.js', 'Auth']
  },
  {
    title: 'Marketing Landing Page',
    image: 'https://images.unsplash.com/photo-1760008486593-a85315610136?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJrZXRpbmclMjBMYW5kaW5nJTIwUGFnZXxlbnwwfDB8fHwxNzYyNTE4Mzk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'High-converting landing page with A/B tested sections.',
    demo: 'https://example.com/landing',
    repo: 'https://github.com/agus/landing-page',
    tags: ['Vite', 'Tailwind', 'A/B Test']
  }
];

const ProjectCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
  >
    <div className="relative aspect-video overflow-hidden">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        <div className="flex items-center gap-2">
          <a href={item.repo} target="_blank" rel="noreferrer" className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
            <Github className="h-4 w-4" />
          </a>
          <a href={item.demo} target="_blank" rel="noreferrer" className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map(t => (
          <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Projects</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Selected works across web apps and experiments.</p>
        </div>
        <a href="https://github.com/agus" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">See all on GitHub</a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} item={p} />)}
      </div>
    </section>
  );
};

export default Projects;
