import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle, Code, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { programmingTools } from "@/lib/data"

export function generateStaticParams() {
  return programmingTools.map((tool) => ({
    id: tool.id,
  }))
}

export default async function ProgrammingToolDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tool = programmingTools.find((t) => t.id === id)

  if (!tool) {
    notFound()
  }

  // 获取相关工具推荐
  const relatedTools = programmingTools
    .filter((t) => t.id !== tool.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/programming-tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回编程工具列表
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="flex items-start gap-6">
                <div className="text-6xl">{tool.logo}</div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {tool.company}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{tool.type}</Badge>
                    <Badge variant="outline">{tool.difficulty}</Badge>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle>简介</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.introduction}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>核心功能</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Supported Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    支持的编程语言
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tool.languages.map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle>适用场景</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.useCases}
                  </p>
                </CardContent>
              </Card>

              {/* Tips for Beginners */}
              <Card className="border-emerald-500/50 bg-emerald-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-emerald-500" />
                    入门建议
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    如果你是编程新手，建议先学习基础的编程语法，然后再使用AI编程工具辅助。
                    AI工具可以帮你加速开发过程，但理解代码的基本逻辑仍然很重要。
                    开始时，可以尝试让AI帮你解释代码、补全简单的代码片段。
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>快速访问</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      访问 {tool.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    点击将在新窗口打开官方网站
                  </div>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>基本信息</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">开发公司</span>
                    <span className="font-medium">{tool.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">类型</span>
                    <span className="font-medium">{tool.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">入门难度</span>
                    <span className="font-medium">{tool.difficulty}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Tools */}
              <Card>
                <CardHeader>
                  <CardTitle>相关推荐</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedTools.map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/programming-tools/${relatedTool.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="text-2xl">{relatedTool.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {relatedTool.name}
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {relatedTool.company}
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
