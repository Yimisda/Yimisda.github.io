import { motion } from "framer-motion"
import { BookOpen, Music, Users, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: BookOpen,
    title: "课程与学习",
    desc: "记录课堂重点、实验报告和作业复盘。",
  },
  {
    icon: Music,
    title: "读书与音乐",
    desc: "阅读笔记与喜欢的音乐清单，慢慢积累。",
  },
  {
    icon: Users,
    title: "社团与活动",
    desc: "参与社团与志愿活动，关注真实的人与事。",
  },
  {
    icon: Heart,
    title: "兴趣与日常",
    desc: "运动、电影、生活碎片，一点点记录下来。",
  },
]

export function Articles() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="learning" className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            学习与生活
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            学习生活记录
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            以学习为主线，把日常的阅读、社团与兴趣整理成可追踪的轨迹。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-0 shadow-soft-lg bg-white dark:bg-gray-800/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
