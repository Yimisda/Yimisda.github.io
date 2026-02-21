import { Github, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/Yimisda" },
  { icon: Mail, label: "Email", url: "mailto:517935800@qq.com" },
]

const quickLinks = [
  { label: "首页", href: "#hero" },
  { label: "知识地图", href: "#learning" },
  { label: "研究焦点", href: "#projects" },
  { label: "阅读进度", href: "#reading" },
  { label: "关于我", href: "#about" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-black/5 dark:border-white/5">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              The World I See
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PKU EECS 本科生
              <br />
              忆阻器与类脑计算 · 知识系统
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary/15 hover:text-primary transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              (c) {currentYear} Yimisda. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Built with
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
