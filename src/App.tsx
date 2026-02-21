import { ThemeProvider } from '@/contexts/ThemeContext';
import { ScrollProgress } from '@/components/custom/ScrollProgress';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { LaTeXDemo } from '@/sections/LaTeXDemo';
import { GitHubProjects } from '@/sections/GitHubProjects';
import { Articles } from '@/sections/Articles';
import { About } from '@/sections/About';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <Stats />
          <LaTeXDemo />
          <GitHubProjects />
          <Articles />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
