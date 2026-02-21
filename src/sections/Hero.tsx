import { motion } from "framer-motion"
import {
  ArrowRight,
  Github,
  Mail,
  FileText,
  ChevronDown,
  Cpu,
  Brain,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const focusAreas = [
  {
    title: "忆阻器交叉阵列与存算一体",
    description: "用电导态直接执行矩阵-向量乘法，关注非理想性与可训练性。",
    icon: Cpu,
  },
  {
    title: "类脑学习规则与 STDP",
    description: "把脉冲时序依赖可塑性映射到器件动力学与电路实现。",
    icon: Brain,
  },
  {
    title: "知识地图工程",
    description: "把课程、研究、项目与反思组织成可检索、可复盘的知识系统。",
    icon: Layers,
  },
]

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[96px] pb-16 hero-surface overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 texture-grid opacity-[0.18]" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary">
                PKU EECS · Memristive Computing
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                <span className="text-gray-900 dark:text-white">The World I See</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                连接课程、器件物理与新型计算架构的长期知识工程，
                让学习与研究形成可追溯、可迁移的结构化路径。
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <div className="inline-flex flex-wrap gap-2">
                {[
                  "忆阻器",
                  "类脑计算",
                  "交叉阵列",
                  "存算一体",
                  "知识地图",
                  "学习工作流",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full hover:border-primary/60 transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-6 text-base font-medium rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#learning")}
              >
                浏览知识地图
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 text-base font-medium rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                onClick={() => scrollToSection("#projects")}
              >
                研究焦点
                <FileText className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 text-base font-medium rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                asChild
              >
                <a href="https://github.com/Yimisda" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-6 py-6 text-base font-medium rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                asChild
              >
                <a href="mailto:517935800@qq.com">
                  <Mail className="w-4 h-4 mr-2" />
                  联系我
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="glass rounded-3xl p-6 sm:p-8 shadow-soft-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">Focus</p>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    研究脉络
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent">
                  2026 · 持续更新
                </span>
              </div>

              <div className="space-y-4">
                {focusAreas.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 p-4"
                    >
                      <div className="w-12 h-12 rounded-xl gradient-bg shadow-glow flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
            onClick={() => scrollToSection("#stats")}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
