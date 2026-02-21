import { motion } from "framer-motion"
import { GraduationCap, Mail, MapPin, Github, FileText, BookOpen, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const education = [
  {
    degree: "B.Eng. in Electronic Engineering",
    institution: "Peking University",
    period: "2024 - Present",
    focus: "电路、信号与系统、计算机基础",
  },
]

const currentFocus = [
  {
    area: "课程基础",
    description: "系统复习电路、信号与系统、数据结构等课程内容",
  },
  {
    area: "学习工具",
    description: "用 Linux、Git 和小脚本提升效率",
  },
  {
    area: "兴趣与生活",
    description: "阅读、音乐与社团活动，保持节奏感",
  },
]

const skills = {
  "课程方向": ["电路", "信号与系统", "数据结构"],
  "编程": ["Python", "C/C++", "MATLAB"],
  "工具": ["Git", "Linux", "LaTeX"],
  "习惯": ["学习规划", "笔记整理", "每周复盘"],
}

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-5xl font-bold text-white">Y</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Yimisda
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">本科生</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">PKU EECS</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  Beijing, China
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:your.email@pku.edu.cn"
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>your.email@pku.edu.cn</span>
                  </a>
                  <a
                    href="https://github.com/Yimisda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/Yimisda</span>
                  </a>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a href="cv.pdf" download>
                    <FileText className="w-4 h-4 mr-2" />
                    下载简历
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    个人简介
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    我是北京大学电子工程专业本科生，目前以打牢课程基础为主，
                    同时记录学习过程和生活节奏，让成长更可见、更稳定。
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    教育经历
                    </h3>
                  </div>
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      方向：{edu.focus}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    目前关注
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {currentFocus.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.area}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    技能与工具
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
