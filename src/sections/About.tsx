import { motion } from 'framer-motion';
import { GraduationCap, Mail, MapPin, Github, FileText, BookOpen, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const education = [
  {
    degree: 'B.Eng. in Electronic Engineering',
    institution: 'Peking University',
    period: '2024 - Present',
    focus: 'Memristive Computing & Neuromorphic Systems',
  },
];

const research = [
  {
    area: 'Memristor Devices',
    description: 'Physical mechanisms and device optimization',
  },
  {
    area: 'Neuromorphic Computing',
    description: 'Brain-inspired computing architectures',
  },
  {
    area: 'In-Memory Computing',
    description: 'Novel computing paradigms beyond von Neumann',
  },
];

const skills = {
  'Device Physics': ['TCAD Simulation', 'Material Characterization', 'Device Modeling'],
  'Circuit Design': ['Analog/Mixed-Signal', 'Neuromorphic Circuits', 'SPICE Simulation'],
  'Programming': ['Python', 'C/C++', 'MATLAB', 'Verilog'],
  'Tools': ['Cadence', 'COMSOL', 'LaTeX', 'Git'],
};

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="card-elevated">
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-5xl font-bold text-white">Y</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Yimisda
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    Undergraduate Student
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    PKU EECS
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  Beijing, China
                </div>

                {/* Contact */}
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

                {/* CV Download */}
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href="cv.pdf" download>
                    <FileText className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
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
                      Biography
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am an undergraduate student at Peking University, majoring in Electronic Engineering.
                    My research interests lie at the intersection of device physics and computing architectures,
                    with a particular focus on memristive devices and neuromorphic computing systems.
                    I am passionate about understanding the fundamental physical mechanisms that enable
                    next-generation computing paradigms and translating these insights into practical implementations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
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
                      Education
                    </h3>
                  </div>
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Research Interests */}
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
                      Research Interests
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {research.map((item, index) => (
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

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Skills & Tools
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
  );
}
