import { Github, Mail, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/Yimisda' },
  { icon: Mail, label: 'Email', url: 'mailto:your.email@pku.edu.cn' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/yourname' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Yimisda
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PKU EECS Student
              <br />
              Memristive Computing Researcher
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Research', 'Projects', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Social */}
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
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} Yimisda. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
