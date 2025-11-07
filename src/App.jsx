import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Sun, Moon, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 bg-white/70 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold">APL Tobing</a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="#experience" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#blog" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button className="rounded-md p-2 md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-gray-200 bg-white px-6 py-3 dark:border-gray-800 dark:bg-gray-950 md:hidden">
            <div className="flex flex-col gap-3">
              {['about','projects','experience','blog','contact'].map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-sm text-gray-700 dark:text-gray-300">{id.charAt(0).toUpperCase()+id.slice(1)}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        © {new Date().getFullYear()} Agustinus Pardamean Lumban Tobing. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
