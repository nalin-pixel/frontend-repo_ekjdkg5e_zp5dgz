import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Mengoptimalkan Rendering di React',
    excerpt: 'Teknik memoization, virtualization, dan splitting yang bisa memangkas waktu render.',
    link: '#',
    date: '2024-07-10'
  },
  {
    title: 'Cara Memilih Library UI yang Tepat untuk Proyek Startup',
    excerpt: 'Kapan memilih Tailwind, shadcn/ui, atau komponen custom dari nol.',
    link: '#',
    date: '2024-05-22'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Blog & Sharing</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Catatan singkat seputar front-end, tips, dan insight proyek.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p, idx) => (
          <motion.a
            key={idx}
            href={p.link}
            className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-blue-600">
              Read more <ArrowRight className="h-4 w-4" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
