import Link from "next/link"
import { ArrowRight, CheckCircle, Circle, Brain, Code, Wrench, Rocket, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const learningSteps = [
  {
    step: 1,
    title: "了解AI基础概念",
    description: "从认识什么是人工智能开始，了解AI大模型的基本原理和应用场景。",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    tasks: [
      { name: "了解什么是AI大模型", completed: false },
      { name: "认识ChatGPT、Claude等主流模型", completed: false },
      { name: "学习如何与AI进行有效对话", completed: false },
    ],
    link: "/models",
    linkText: "开始学习AI大模型",
  },
  {
    step: 2,
    title: "体验AI对话助手",
    description: "亲自动手使用AI对话工具，从简单的问答开始，逐步掌握AI对话技巧。",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    tasks: [
      { name: "注册并使用一个AI对话工具", completed: false },
      { name: "尝试让AI帮你写一段文案", completed: false },
      { name: "学习提示词（Prompt）的基本技巧", completed: false },
    ],
    link: "/models",
    linkText: "探索AI大模型",
  },
  {
    step: 3,
    title: "探索AI实用工具",
    description: "了解AI绘画、AI写作、AI视频等各类工具，找到适合自己需求的AI助手。",
    icon: Wrench,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    tasks: [
      { name: "了解AI绘画工具（Midjourney等）", completed: false },
      { name: "体验AI写作或AI演示工具", completed: false },
      { name: "找到一个适合自己的AI工具", completed: false },
    ],
    link: "/ai-tools",
    linkText: "探索AI工具",
  },
  {
    step: 4,
    title: "入门AI编程辅助",
    description: "如果你有编程基础，可以学习使用AI编程工具来提升开发效率。",
    icon: Code,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    tasks: [
      { name: "了解GitHub Copilot等AI编程工具", completed: false },
      { name: "尝试使用AI辅助编写简单代码", completed: false },
      { name: "学习如何让AI帮你解释和优化代码", completed: false },
    ],
    link: "/programming-tools",
    linkText: "探索编程工具",
    optional: true,
  },
  {
    step: 5,
    title: "持续学习与实践",
    description: "保持学习热情，关注AI领域最新动态，将AI工具融入日常工作和生活。",
    icon: Rocket,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    tasks: [
      { name: "将AI工具用于实际项目", completed: false },
      { name: "关注AI领域的最新发展", completed: false },
      { name: "分享你的AI使用经验", completed: false },
    ],
    link: "/",
    linkText: "返回首页",
  },
]

const tips = [
  {
    title: "从简单开始",
    description: "不要试图一次学习所有内容，从最基础的AI对话开始，循序渐进。",
  },
  {
    title: "多动手实践",
    description: "看十遍不如做一遍，亲自体验各种AI工具才能真正掌握。",
  },
  {
    title: "保持好奇心",
    description: "AI技术发展很快，保持学习的热情，享受探索的乐趣。",
  },
  {
    title: "不要害怕犯错",
    description: "AI工具使用没有标准答案，大胆尝试，从错误中学习。",
  },
]

export default function LearningPathPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              学习路径
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              AI入门学习路径
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              按照以下步骤，从零开始系统学习AI基础知识，
              每一步都有明确的目标和任务，帮助你轻松入门AI世界。
            </p>
          </div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {learningSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < learningSteps.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-border -z-10" />
                )}

                <Card className="relative">
                  {step.optional && (
                    <Badge className="absolute -top-3 right-4" variant="outline">
                      可选
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary">第 {step.step} 步</Badge>
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {step.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-3">
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <span
                            className={
                              task.completed ? "text-muted-foreground line-through" : ""
                            }
                          >
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={step.link}>
                        {step.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">学习小贴士</h2>
            <p className="mt-2 text-muted-foreground">
              帮助你更高效地学习AI知识
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <Card key={tip.title} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-muted-foreground mb-8">
            从了解第一个AI大模型开始，踏上你的AI学习之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/models">
                了解AI大模型
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ai-tools">探索AI工具</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
