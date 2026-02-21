import { ThemeProvider } from '@/contexts/ThemeContext';
import { ScrollProgress } from '@/components/custom/ScrollProgress';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Stats } from '@/sections/Stats';
import { GitHubProjects } from '@/sections/GitHubProjects';
import { Articles } from '@/sections/Articles';
import { ReadingMilestones } from '@/sections/ReadingMilestones';
import { About } from '@/sections/About';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <Stats />
          <GitHubProjects />
          <Articles />
          <ReadingMilestones />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

