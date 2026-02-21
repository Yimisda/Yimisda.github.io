import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Calendar, Tag, ChevronRight, ExternalLink, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Article {
  id: string
  title: string
  abstract: string
  date: string
  readTime: string
  tags: string[]
  category: string
  url: string
}

const articles: Article[] = [
  {
    id: "1",
    title: "Device-Level Optimization for Memristive Arrays",
    abstract:
      "A practical overview of device variability modeling and how it informs array-level design decisions for neuromorphic systems.",
    date: "2024-12-15",
    readTime: "12 min read",
    tags: ["memristor", "device physics", "modeling"],
    category: "Publications",
    url: "#",
  },
  {
    id: "2",
    title: "LaTeX Rendering in Web Tooling",
    abstract:
      "Tradeoffs between KaTeX and MathJax, with implementation notes for performance-sensitive frontends.",
    date: "2024-11-28",
    readTime: "9 min read",
    tags: ["latex", "katex", "frontend"],
    category: "Notes",
    url: "#",
  },
  {
    id: "3",
    title: "Transformer Efficiency: Practical Takeaways",
    abstract:
      "A concise set of engineering takeaways for optimizing attention-heavy workloads on modern hardware.",
    date: "2024-10-20",
    readTime: "14 min read",
    tags: ["nlp", "transformer", "systems"],
    category: "Notes",
    url: "#",
  },
  {
    id: "4",
    title: "PPO in Continuous Control: Lessons Learned",
    abstract:
      "Implementation details, stability tips, and evaluation pitfalls when training PPO on continuous control tasks.",
    date: "2024-09-15",
    readTime: "16 min read",
    tags: ["reinforcement learning", "ppo", "benchmarking"],
    category: "Publications",
    url: "#",
  },
]

const categories = ["All", "Publications", "Notes"]

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const badgeStyle =
    article.category === "Publications"
      ? "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
      : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="group h-full border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800/50">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className={`text-xs ${badgeStyle}`}>
              {article.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              {article.date}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <div className="relative">
            <p
              className={`text-sm text-gray-600 dark:text-gray-400 mb-4 ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {article.abstract}
            </p>
            {!isExpanded && article.abstract.length > 100 && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-xs text-indigo-500 hover:text-indigo-600 font-medium"
              >
                Expand
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

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
                Read more
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Articles() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory)

  return (
    <section id="articles" className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Publications and Notes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Writing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated set of research summaries, engineering notes, and experimental logs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "gradient-bg text-white"
                  : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

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
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
