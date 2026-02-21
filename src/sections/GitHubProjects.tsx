import { motion } from "framer-motion"
import {
  BookOpen,
  FileText,
  GitBranch,
  Database,
  Folder,
  Sparkles,
  Cpu,
  Brain,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ModuleCard {
  id: string
  title: string
  description: string
  href: string
  count: number
  icon: React.ElementType
  tag: string
}

interface ThreadCard {
  id: string
  title: string
  description: string
  icon: React.ElementType
  tag: string
}

const threads: ThreadCard[] = [
  {
    id: "crossbar",
    title: "忆阻器交叉阵列仿真",
    description: "从器件模型到阵列非理想性，建立可验证的仿真基线。",
    icon: Cpu,
    tag: "SPICE / 交叉阵列",
  },
  {
    id: "stdp",
    title: "类脑学习规则与 STDP",
    description: "把学习规则落地到器件动力学与电路实现的可塑性路径。",
    icon: Brain,
    tag: "学习规则 / 动力学",
  },
  {
    id: "architecture",
    title: "新型计算架构生态位",
    description: "比较忆阻器、光子与数字加速器的系统级定位与协作边界。",
    icon: GitBranch,
    tag: "架构 / 生态位",
  },
]

const modules: ModuleCard[] = [
  {
    id: "learning",
    title: "课程学习",
    description: "信号与系统、电路、数据结构等课程笔记与作业复盘。",
    href: "#learning",
    count: 61,
    icon: BookOpen,
    tag: "课程/作业/电工",
  },
  {
    id: "workflow",
    title: "工作流",
    description: "学习、生活与写作流程的模板与 SOP。",
    href: "#learning",
    count: 66,
    icon: Folder,
    tag: "流程/模板",
  },
  {
    id: "resources",
    title: "资源库",
    description: "工具、资料、链接的统一索引。",
    href: "#learning",
    count: 31,
    icon: Database,
    tag: "资料/工具",
  },
  {
    id: "research",
    title: "研究与论文",
    description: "论文阅读、问题清单与阶段性思考。",
    href: "#learning",
    count: 4,
    icon: FileText,
    tag: "论文/思考",
  },
  {
    id: "practice",
    title: "项目与实践",
    description: "实验记录、小工具与实践清单。",
    href: "#learning",
    count: 1,
    icon: GitBranch,
    tag: "实验/工具",
  },
  {
    id: "growth",
    title: "成长记录",
    description: "思考、个人发展与工作日报。",
    href: "#learning",
    count: 27,
    icon: Sparkles,
    tag: "成长/反思",
  },
]

function ThreadCardComponent({ thread, index }: { thread: ThreadCard; index: number }) {
  const Icon = thread.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full border border-black/5 dark:border-white/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden bg-white/90 dark:bg-gray-800/60">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shadow-glow">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {thread.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{thread.tag}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {thread.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ModuleCardComponent({ module, index }: { module: ModuleCard; index: number }) {
  const Icon = module.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
    >
      <Card className="group h-full border border-black/5 dark:border-white/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden bg-white/90 dark:bg-gray-800/60">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <a
                  href={module.href}
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary"
                >
                  查看该模块
                </a>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-primary/10 text-primary"
            >
              {module.count} 篇
            </Badge>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {module.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/60 rounded-full">
              {module.tag}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function GitHubProjects() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            研究焦点
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            研究焦点与模块结构
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            将器件物理、学习规则与系统架构的关键问题同步推进，并沉淀为可复用模块。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {threads.map((thread, index) => (
            <ThreadCardComponent key={thread.id} thread={thread} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                The World I See 模块
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                以主题为索引，把课程、研究、项目与成长记录组织成系统。
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent">
              持续扩展中
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ModuleCardComponent key={module.id} module={module} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
