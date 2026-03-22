import Link from "next/link"
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Target,
    title: "简单易懂",
    description: "我们相信AI知识不应该有高门槛，用最通俗的语言让每个人都能理解。",
  },
  {
    icon: Heart,
    title: "用户至上",
    description: "始终站在入门用户的角度思考，提供真正有价值的学习内容。",
  },
  {
    icon: Zap,
    title: "与时俱进",
    description: "AI领域发展迅速，我们持续更新内容，确保信息的时效性和准确性。",
  },
  {
    icon: Users,
    title: "开放共享",
    description: "知识应该被分享，我们致力于让更多人受益于AI技术的发展。",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              关于我们
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              让AI学习变得简单
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              我们是一个专注于AI入门教育的平台，致力于降低AI学习门槛，
              帮助每一个对AI感兴趣的人轻松入门。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当前AI技术快速普及，越来越多人希望了解和学习AI。然而，市面上的AI学习资源
                要么理论深奥、门槛过高，要么内容零散、缺乏系统性。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                我们的使命是搭建一个轻量化、入门级的AI学习平台，避开复杂理论，
                聚焦AI基础知识，涵盖AI大模型、编程工具、各类AI工具的入门介绍，
                让用户快速了解AI核心基础内容，实现轻松入门。
              </p>
              <Button asChild>
                <Link href="/learning-path">
                  查看学习路径
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardHeader className="pb-2">
                    <value.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">我们提供什么</h2>
            <p className="mt-2 text-muted-foreground">
              覆盖AI入门学习的核心内容
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>AI大模型介绍</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  详细介绍ChatGPT、Claude、文心一言等主流AI大模型，
                  帮助你了解它们的特点和适用场景。
                </p>
                <Button variant="outline" asChild>
                  <Link href="/models">了解更多</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI编程工具</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  探索GitHub Copilot、Cursor等AI编程工具，
                  了解如何使用AI提升编程效率。
                </p>
                <Button variant="outline" asChild>
                  <Link href="/programming-tools">了解更多</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>实用AI工具</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  发现AI绘画、AI写作、AI视频等各类实用工具，
                  找到适合你需求的AI助手。
                </p>
                <Button variant="outline" asChild>
                  <Link href="/ai-tools">了解更多</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">适合谁来学习</h2>
            <p className="mt-2 text-muted-foreground">
              如果你属于以下人群，这个平台很适合你
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold mb-2">学生</h3>
                <p className="text-sm text-muted-foreground">
                  想了解AI技术，为未来发展做准备
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold mb-2">职场新人</h3>
                <p className="text-sm text-muted-foreground">
                  希望利用AI工具提升工作效率
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold mb-2">AI爱好者</h3>
                <p className="text-sm text-muted-foreground">
                  对AI技术感兴趣，想系统了解
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-semibold mb-2">转型人群</h3>
                <p className="text-sm text-muted-foreground">
                  想了解AI，探索新的职业方向
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">开始你的AI学习之旅</h2>
          <p className="text-muted-foreground mb-8">
            从今天开始，一步一步掌握AI基础知识
          </p>
          <Button size="lg" asChild>
            <Link href="/models">
              立即开始学习
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
