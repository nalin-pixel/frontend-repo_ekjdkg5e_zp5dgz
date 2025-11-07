import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'TechNova Digital',
    role: 'Front-End Developer',
    years: '2022 - 2024',
    desc: 'Membangun dashboard analitik, komponen UI reusable, dan optimasi performa.',
    stack: ['React', 'Next.js', 'Tailwind', 'Vercel']
  },
  {
    company: 'Skyline Labs',
    role: 'UI Engineer (Contract)',
    years: '2021 - 2022',
    desc: 'Mengimplementasikan design system dan meningkatkan lighthouse score 95+.',
    stack: ['Vue', 'SCSS', 'Vitest']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-blue-600" />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Experience</h2>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-800">
        {experiences.map((e, idx) => (
          <li key={idx} className="ms-6 pb-8">
            <span className="absolute -start-2.5 mt-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-600 ring-4 ring-blue-200 dark:ring-blue-900"></span>
            <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{e.company}</h3>
                <span className="text-sm text-gray-500">{e.years}</span>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">{e.role}</div>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{e.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.stack.map(s => (
                  <span key={s} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">{s}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
