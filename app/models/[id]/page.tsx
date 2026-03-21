import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { aiModels } from "@/lib/data"

export function generateStaticParams() {
  return aiModels.map((model) => ({
    id: model.id,
  }))
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const model = aiModels.find((m) => m.id === id)

  if (!model) {
    notFound()
  }

  // 获取相关模型推荐
  const relatedModels = aiModels
    .filter((m) => m.id !== model.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/models">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回大模型列表
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
                <div className="text-6xl">{model.logo}</div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{model.name}</h1>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {model.company}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{model.type}</Badge>
                    <Badge variant="outline">{model.difficulty}</Badge>
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
                    {model.introduction}
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
                    {model.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
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
                    {model.useCases}
                  </p>
                </CardContent>
              </Card>

              {/* Tips for Beginners */}
              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    入门提示
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    作为入门用户，建议先从简单的问答开始尝试，比如问一个日常问题或让AI帮你写一段简单的文案。
                    随着使用次数增加，你会逐渐掌握与AI对话的技巧，比如如何提出清晰的问题、如何给AI提供上下文等。
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
                    <a href={model.url} target="_blank" rel="noopener noreferrer">
                      访问 {model.name}
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
                    <span className="font-medium">{model.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">类型</span>
                    <span className="font-medium">{model.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">入门难度</span>
                    <span className="font-medium">{model.difficulty}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Models */}
              <Card>
                <CardHeader>
                  <CardTitle>相关推荐</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedModels.map((relatedModel) => (
                    <Link
                      key={relatedModel.id}
                      href={`/models/${relatedModel.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="text-2xl">{relatedModel.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {relatedModel.name}
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {relatedModel.company}
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
