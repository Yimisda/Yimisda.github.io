import { motion } from "framer-motion"
import { BookOpen, Folder, Database, Heart, Cpu, Activity } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: BookOpen,
    title: "课程学习",
    desc: "信号与系统、电路、数据结构等课程笔记与作业复盘（61 篇）。",
  },
  {
    icon: Folder,
    title: "工作流",
    desc: "学习、生活与写作流程、模板与 SOP（66 篇）。",
  },
  {
    icon: Database,
    title: "资源库",
    desc: "工具、资料与链接索引（31 篇）。",
  },
  {
    icon: Heart,
    title: "成长记录",
    desc: "思考、个人发展与工作日报（27 篇）。",
  },
  {
    icon: Cpu,
    title: "忆阻器与新型计算",
    desc: "交叉阵列、存算一体与器件非理想性问题清单，建立研究路线图。",
  },
  {
    icon: Activity,
    title: "类脑学习与动力学",
    desc: "STDP、器件动力学与神经形态计算的结构同构探索。",
  },
]

export function Articles() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="learning" className="section-padding bg-gray-50/60 dark:bg-gray-900/30">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            知识地图
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            知识地图与研究脉络
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            以课程为主线，向研究与项目延展，把碎片化输入转化为可检索的结构。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-0 shadow-soft-lg bg-white/90 dark:bg-gray-800/60"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
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
