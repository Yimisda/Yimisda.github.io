import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Link2, Star, GitFork, ExternalLink, Loader2, Code2, FileText, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCard {
  id: string;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  topics: string[];
}

const sampleProjects: ProjectCard[] = [
  {
    id: '1',
    name: 'latex-renderer',
    description: 'A high-performance LaTeX math formula renderer for web applications with real-time preview and KaTeX integration.',
    url: 'https://github.com/Yimisda/latex-renderer',
    stars: 128,
    forks: 24,
    language: 'TypeScript',
    languageColor: '#3178c6',
    topics: ['latex', 'katex', 'math', 'react'],
  },
  {
    id: '2',
    name: 'pku-research-tools',
    description: 'Collection of research utilities and automation tools for academic workflows at PKU.',
    url: 'https://github.com/Yimisda/pku-research-tools',
    stars: 89,
    forks: 15,
    language: 'Python',
    languageColor: '#3572A5',
    topics: ['research', 'automation', 'academic', 'tools'],
  },
  {
    id: '3',
    name: 'ml-experiments',
    description: 'Machine learning experiments and implementations of recent papers in computer vision and NLP.',
    url: 'https://github.com/Yimisda/ml-experiments',
    stars: 256,
    forks: 42,
    language: 'Jupyter Notebook',
    languageColor: '#DA5B0B',
    topics: ['machine-learning', 'deep-learning', 'pytorch', 'research'],
  },
];

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
};

function ProjectCardComponent({ project, index }: { project: ProjectCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800/50">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-500 flex items-center gap-1"
                >
                  <Link2 className="w-3 h-3" />
                  View on GitHub
                </a>
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-indigo-500" />
            </a>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.topics.map(topic => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              >
                {topic}
              </Badge>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              {/* Language */}
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.languageColor }}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  {project.language}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <GitFork className="w-4 h-4" />
                  {project.forks}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function GitHubProjects() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectCard[]>(sampleProjects);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleGenerateCard = async () => {
    if (!repoUrl.trim()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Extract repo name from URL
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const [, owner, repo] = match;
      const newProject: ProjectCard = {
        id: Date.now().toString(),
        name: repo.replace('.git', ''),
        description: `Automatically generated project card for ${owner}/${repo}. This project was added via the GitHub integration feature.`,
        url: repoUrl,
        stars: Math.floor(Math.random() * 500),
        forks: Math.floor(Math.random() * 100),
        language: 'TypeScript',
        languageColor: languageColors['TypeScript'],
        topics: ['github', 'integration', 'auto-generated'],
      };
      setProjects(prev => [newProject, ...prev]);
    }

    setIsLoading(false);
    setRepoUrl('');
  };

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Github className="w-4 h-4" />
            GitHub 集成
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub 项目展示
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            输入 GitHub 仓库链接，系统将自动获取项目信息并生成精美的展示卡片
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card className="border-0 shadow-soft-lg">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://github.com/username/repository"
                    value={repoUrl}
                    onChange={e => setRepoUrl(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleGenerateCard()}
                    className="pl-10 h-12"
                  />
                </div>
                <Button
                  onClick={handleGenerateCard}
                  disabled={isLoading || !repoUrl.trim()}
                  className="gradient-bg text-white h-12 px-6 shadow-glow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      生成卡片
                    </>
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">README 解析</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">语言统计</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">LaTeX 渲染</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCardComponent
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Yimisda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            访问我的 GitHub 查看所有项目
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
