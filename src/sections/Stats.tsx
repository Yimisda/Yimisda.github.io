import { motion } from 'framer-motion';
import { FileText, GitBranch, BookOpen, Star } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: FileText, value: 50, label: '技术文章', suffix: '' },
  { icon: GitBranch, value: 15, label: '开源项目', suffix: '' },
  { icon: BookOpen, value: 8, label: '研究论文', suffix: '' },
  { icon: Star, value: 1000, label: 'GitHub Stars', suffix: '' },
];

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  index,
  isVisible,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    delay: index * 200,
    enabled: isVisible,
  });

  const formattedCount = value >= 1000 
    ? (count / 1000).toFixed(1) + 'k'
    : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Value */}
          <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
            {formattedCount}
            {suffix}
          </div>

          {/* Label */}
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {label}
          </p>
        </div>

        {/* Decorative corner */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            数据概览
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            记录我的学术旅程与技术探索
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
