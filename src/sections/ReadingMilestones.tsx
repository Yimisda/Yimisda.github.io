import { motion } from "framer-motion"
import { BookOpen, Target, CheckCircle, Hourglass } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"

const tracks = [
  {
    title: "忆阻器与类脑计算",
    progress: 65,
    total: 12,
    done: 8,
    focus: "器件动力学、交叉阵列、STDP",
  },
  {
    title: "存算一体与新型架构",
    progress: 45,
    total: 10,
    done: 4,
    focus: "架构生态位、能效对比、系统瓶颈",
  },
  {
    title: "器件物理基础",
    progress: 55,
    total: 9,
    done: 5,
    focus: "能带理论、非线性导电、噪声与变异性",
  },
]

const milestones = [
  {
    status: "completed",
    title: "Nature 2020: Memristor CNN",
    note: "建立GPU与交叉阵列能效差距的直觉基准。",
  },
  {
    status: "in-progress",
    title: "Nature Electronics 2018: Memristive Systems Review",
    note: "系统梳理器件非理想性与系统级挑战。",
  },
  {
    status: "up-next",
    title: "Higher-Complexity Memristors",
    note: "聚焦高阶动力学、热效应与类脑计算映射。",
  },
]

const statusStyles = {
  completed: {
    icon: CheckCircle,
    label: "已完成",
    className: "text-primary",
  },
  "in-progress": {
    icon: Hourglass,
    label: "进行中",
    className: "text-accent",
  },
  "up-next": {
    icon: Target,
    label: "即将开始",
    className: "text-gray-500",
  },
}

export function ReadingMilestones() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="reading" className="section-padding">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            论文阅读进度
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            阅读进度与里程碑
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            把论文阅读拆解为可追踪的主题轨道，并以里程碑记录关键洞见。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {tracks.map((track) => (
              <Card
                key={track.title}
                className="border border-black/5 dark:border-white/10 shadow-soft bg-white/90 dark:bg-gray-800/60"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {track.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {track.focus}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {track.progress}%
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {track.done}/{track.total} 篇
                      </p>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full gradient-bg"
                      style={{ width: `${track.progress}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-black/5 dark:border-white/10 shadow-soft-lg bg-white/90 dark:bg-gray-800/60 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  关键里程碑
                </h3>
                <div className="space-y-5">
                  {milestones.map((milestone) => {
                    const status = statusStyles[milestone.status as keyof typeof statusStyles]
                    const Icon = status.icon

                    return (
                      <div key={milestone.title} className="flex gap-4">
                        <div className="mt-1">
                          <Icon className={`w-5 h-5 ${status.className}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                              {milestone.title}
                            </h4>
                            <span className={`text-xs font-semibold ${status.className}`}>
                              {status.label}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {milestone.note}
                          </p>
                        </div>
                      </div>
                    )}
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
