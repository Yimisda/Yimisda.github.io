import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, RefreshCw, Copy, Check } from "lucide-react"
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from "react-katex"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const latexExamples = {
  inline: [
    { name: "Euler Identity", latex: "e^{i\\pi} + 1 = 0" },
    { name: "Mass-Energy", latex: "E = mc^2" },
    { name: "Pythagorean", latex: "a^2 + b^2 = c^2" },
  ],
  block: [
    {
      name: "Gaussian Integral",
      latex: "\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}",
    },
    {
      name: "Exponential Series",
      latex:
        "e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots",
    },
    {
      name: "Fourier Transform",
      latex:
        "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} dx",
    },
  ],
  matrix: [
    {
      name: "Linear System",
      latex:
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ax + by \\\\ cx + dy \\end{pmatrix}",
    },
    {
      name: "Determinant",
      latex:
        "\\det(A) = \\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix}",
    },
  ],
  advanced: [
    {
      name: "Divergence Theorem",
      latex:
        "\\frac{\\partial}{\\partial t} \\int_{\\Omega} u \\, dx = \\int_{\\partial \\Omega} F \\cdot n \\, dS",
    },
    {
      name: "Maxwell Equation",
      latex: "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}",
    },
    {
      name: "Schrodinger",
      latex:
        "i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r},t) = \\hat{H} \\Psi(\\mathbf{r},t)",
    },
  ],
}

function FormulaCard({
  name,
  latex,
  type,
}: {
  name: string
  latex: string
  type: "inline" | "block"
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(latex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="overflow-x-auto">
        {type === "inline" ? (
          <div className="text-center py-2">
            <InlineMath math={latex} />
          </div>
        ) : (
          <div className="py-2">
            <BlockMath math={latex} />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function LaTeXDemo() {
  const [key, setKey] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleRerender = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <section id="latex" className="section-padding bg-gray-50/50 dark:bg-gray-900/30">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            LaTeX Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            High-quality Math Rendering
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Examples rendered with KaTeX, including inline equations, block formulas,
            matrices, and advanced expressions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-soft-lg overflow-hidden">
            <CardHeader className="border-b border-gray-100 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Formula Gallery
                </CardTitle>
                <Button variant="outline" size="sm" onClick={handleRerender} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <Tabs defaultValue="inline" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="inline">Inline</TabsTrigger>
                  <TabsTrigger value="block">Block</TabsTrigger>
                  <TabsTrigger value="matrix">Matrix</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                {Object.entries(latexExamples).map(([category, formulas]) => (
                  <TabsContent key={category} value={category}>
                    <div key={key} className="grid gap-4">
                      {formulas.map((formula, index) => (
                        <motion.div
                          key={formula.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <FormulaCard
                            name={formula.name}
                            latex={formula.latex}
                            type={category === "inline" ? "inline" : "block"}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              title: "Fast Rendering",
              desc: "KaTeX renders large formulas quickly without layout shifts.",
            },
            {
              title: "Accessible Output",
              desc: "Math content remains selectable and screen-reader friendly.",
            },
            {
              title: "Consistent Style",
              desc: "Typography and spacing match the rest of the design system.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

