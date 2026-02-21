import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Tag, ChevronRight, ExternalLink, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Article {
  id: string;
  title: string;
  abstract: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  url: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: '基于深度学习的图像分类方法研究',
    abstract: '本文探讨了卷积神经网络在图像分类任务中的应用，提出了一种改进的残差连接结构，在CIFAR-10和ImageNet数据集上取得了优异的性能。',
    date: '2024-12-15',
    readTime: '15 分钟',
    tags: ['深度学习', '计算机视觉', 'CNN'],
    category: '研究论文',
    url: '#',
  },
  {
    id: '2',
    title: 'LaTeX 数学公式排版最佳实践',
    abstract: '总结在学术写作中使用LaTeX排版数学公式的技巧和经验，包括常用宏包推荐、复杂公式排版方法以及常见问题的解决方案。',
    date: '2024-11-28',
    readTime: '10 分钟',
    tags: ['LaTeX', '学术写作', '排版'],
    category: '技术文章',
    url: '#',
  },
  {
    id: '3',
    title: 'Transformer 模型原理详解',
    abstract: '从注意力机制到多头注意力，深入解析Transformer架构的核心组件，并通过代码示例展示如何实现一个完整的Transformer模型。',
    date: '2024-10-20',
    readTime: '20 分钟',
    tags: ['NLP', 'Transformer', 'PyTorch'],
    category: '技术文章',
    url: '#',
  },
  {
    id: '4',
    title: '强化学习在机器人控制中的应用',
    abstract: '探讨深度强化学习算法在机器人运动控制中的实际应用，分析了PPO、SAC等算法在仿真实验中的表现。',
    date: '2024-09-15',
    readTime: '18 分钟',
    tags: ['强化学习', '机器人', '控制理论'],
    category: '研究论文',
    url: '#',
  },
];

const categories = ['全部', '研究论文', '技术文章'];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="group h-full border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800/50">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <Badge
              variant="secondary"
              className={`text-xs ${
                article.category === '研究论文'
                  ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400'
                  : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {article.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              {article.date}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Abstract */}
          <div className="relative">
            <p
              className={`text-sm text-gray-600 dark:text-gray-400 mb-4 ${
                isExpanded ? '' : 'line-clamp-2'
              }`}
            >
              {article.abstract}
            </p>
            {!isExpanded && article.abstract.length > 100 && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-xs text-indigo-500 hover:text-indigo-600 font-medium"
              >
                展开更多
              </button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              asChild
            >
              <a href={article.url}>
                阅读更多
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Articles() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const filteredArticles =
    activeCategory === '全部'
      ? articles
      : articles.filter(article => article.category === activeCategory);

  return (
    <section id="articles" className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            学术文章
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            最新文章
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            分享我的研究成果与技术心得
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'gradient-bg text-white'
                  : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </motion.div>
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
            <BookOpen className="w-5 h-5" />
            访问 GitHub 查看所有文章
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
