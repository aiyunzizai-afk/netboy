import Link from "next/link"
import { ArrowRight, Sparkles, Brain, Code, Wrench, Zap, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { aiModels, programmingTools, aiTools } from "@/lib/data"

const features = [
  {
    icon: Brain,
    title: "AI大模型",
    description: "了解ChatGPT、Claude、文心一言等主流大模型的特点和使用场景",
    href: "/models",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "编程工具",
    description: "探索GitHub Copilot、Cursor等AI编程工具，提升开发效率",
    href: "/programming-tools",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Wrench,
    title: "AI工具",
    description: "发现绘画、写作、视频等各类AI工具，释放创造力",
    href: "/ai-tools",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
]

const stats = [
  { label: "AI大模型", value: `${aiModels.length}+`, icon: Brain },
  { label: "编程工具", value: `${programmingTools.length}+`, icon: Code },
  { label: "AI工具", value: `${aiTools.length}+`, icon: Wrench },
]

export default function HomePage() {
  // 获取热门推荐
  const featuredModels = aiModels.slice(0, 3)
  const featuredTools = aiTools.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              零基础也能轻松入门AI
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              <span className="block">轻松开启</span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI学习之旅
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              面向AI入门学习者的轻量化平台，涵盖主流AI大模型、编程工具和实用AI工具，
              内容通俗易懂，帮助你快速掌握AI基础知识。
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/models">
                  开始学习
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/learning-path">
                  查看学习路径
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-primary mr-2" />
                    <span className="text-2xl sm:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">探索AI基础知识</h2>
            <p className="mt-4 text-muted-foreground">
              从三大核心领域入手，系统了解AI世界
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="h-full card-hover border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {feature.title}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">热门AI大模型</h2>
              <p className="mt-2 text-muted-foreground">了解最受欢迎的AI大模型</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/models">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredModels.map((model) => (
              <Link key={model.id} href={`/models/${model.id}`}>
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{model.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{model.name}</CardTitle>
                        <CardDescription>{model.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {model.introduction}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">{model.type}</Badge>
                      <Badge variant="outline">{model.difficulty}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">实用AI工具</h2>
              <p className="mt-2 text-muted-foreground">发现能提升效率的AI工具</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/ai-tools">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <Link key={tool.id} href={`/ai-tools/${tool.id}`}>
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{tool.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription>{tool.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tool.introduction}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">{tool.category}</Badge>
                      <Badge variant="outline">{tool.difficulty}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">为什么选择我们</h2>
            <p className="mt-4 text-muted-foreground">
              专为AI入门学习者打造的学习平台
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">简单易懂</h3>
              <p className="text-sm text-muted-foreground">
                内容通俗易懂，避免复杂术语，适合零基础用户
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">系统全面</h3>
              <p className="text-sm text-muted-foreground">
                覆盖AI大模型、编程工具、实用工具三大领域
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">持续更新</h3>
              <p className="text-sm text-muted-foreground">
                定期更新最新AI工具和大模型信息
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">入门友好</h3>
              <p className="text-sm text-muted-foreground">
                专为AI初学者设计，降低学习门槛
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始学习了吗？</h2>
          <p className="text-lg text-muted-foreground mb-8">
            从了解一个AI大模型开始，开启你的AI学习之旅
          </p>
          <Button size="lg" asChild>
            <Link href="/models">
              立即开始
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
