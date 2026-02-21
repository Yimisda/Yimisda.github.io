import { motion } from "framer-motion"
import { ArrowRight, Github, Mail, FileText, ChevronDown } from "lucide-react"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px] bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-gray-900 dark:text-white">Yimisda</span>
          </h1>
          <div className="flex items-center gap-3 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            <span className="font-mono">PKU EECS</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>本科生</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>学习与生活</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            夯实{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              课程基础
            </span>{" "}
            与{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              工程习惯
            </span>{" "}
            ，把学习、读书与生活的进展记录下来。
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex flex-wrap gap-2">
            {["信号与系统", "电路", "数据结构", "读书", "音乐"].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-6 text-base font-medium rounded-lg transition-all duration-200"
            onClick={() => scrollToSection("#learning")}
          >
            查看学习记录
            <ArrowRight className="w-4 h-4 ml-2" />
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
            <a href="mailto:your.email@pku.edu.cn">
              <Mail className="w-4 h-4 mr-2" />
              联系我
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-6 py-6 text-base font-medium rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            onClick={() => scrollToSection("#about")}
          >
            <FileText className="w-4 h-4 mr-2" />
            简历
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
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
