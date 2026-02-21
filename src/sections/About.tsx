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
    focus: "夯实电子工程与计算机系统基础，并将课程与研究问题建立映射。",
  },
]

const currentFocus = [
  {
    area: "忆阻器与类脑计算架构",
    description: "建立器件物理、存算一体与学习规则之间的结构同构。",
  },
  {
    area: "交叉阵列仿真与非理想性",
    description: "用仿真验证器件模型、阵列噪声与可训练性边界。",
  },
  {
    area: "知识地图与研究方法",
    description: "将课程、项目与反思组织成可检索、可复盘的研究系统。",
  },
]

const skills = {
  学科方向: ["信号与系统", "电路分析", "数据结构", "计算机系统基础"],
  编程语言: ["Python", "C/C++", "MATLAB", "TypeScript"],
  工具链: ["Git", "Linux", "LaTeX", "Obsidian"],
  知识管理: ["Markdown", "知识卡片", "主题索引", "复盘方法"],
}

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="section-padding bg-gray-50/70 dark:bg-gray-900/50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            关于我与这个项目
          </h2>
          <div className="w-20 h-1 bg-primary" />
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
                  <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center shadow-lg">
                    <span className="text-5xl font-bold text-white">Y</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Yimisda
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">知识库与学习系统</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">PKU EECS</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  Beijing, China
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:517935800@qq.com"
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>517935800@qq.com</span>
                  </a>
                  <a
                    href="https://github.com/Yimisda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
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
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      这个仓库在做什么
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The World I See 是一套长期维护的学习与生活知识库：围绕课程学习建立主干，
                    以研究笔记、项目实践、阅读记录和工作流为分支，形成可检索、可复盘的个人知识地图。
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
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      教育背景
                    </h3>
                  </div>
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 dark:border-primary/50 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.focus}</p>
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
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">近期主题</h3>
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
                    能力与工具
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

