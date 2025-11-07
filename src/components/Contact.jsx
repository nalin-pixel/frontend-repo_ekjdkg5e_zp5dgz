import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Contact / Hire Me</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Let’s Build Something Great Together!</p>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm text-gray-600">Name</label>
              <input className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-700" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">Email</label>
              <input type="email" className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-700" placeholder="you@mail.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">Message</label>
              <textarea rows={5} className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-700" placeholder="Tell me about your project..." />
            </div>
            <button className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Send Message</button>
          </div>
        </form>
        <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><Mail className="h-5 w-5 text-blue-600" /> agustinus@example.com</li>
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><Github className="h-5 w-5" /> github.com/agus</li>
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><Linkedin className="h-5 w-5 text-blue-700" /> linkedin.com/in/agustinus</li>
            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><Instagram className="h-5 w-5 text-pink-600" /> instagram.com/agus.dev</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
