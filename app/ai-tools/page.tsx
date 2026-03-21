"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { aiTools } from "@/lib/data"

const categoryFilters = [
  { id: "all", name: "全部" },
  { id: "AI绘画", name: "AI绘画" },
  { id: "AI写作", name: "AI写作" },
  { id: "AI视频", name: "AI视频" },
  { id: "AI演示", name: "AI演示" },
  { id: "AI语音", name: "AI语音" },
]

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.introduction.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      activeFilter === "all" || tool.category === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              AI工具
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              探索实用AI工具
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              发现AI绘画、AI写作、AI视频等各类实用工具，
              无需专业技能，轻松释放你的创造力。
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索工具名称或公司..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {categoryFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">没有找到匹配的AI工具</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("all")
                }}
              >
                清除筛选条件
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <Link key={tool.id} href={`/ai-tools/${tool.id}`}>
                  <Card className="h-full card-hover group">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{tool.logo}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {tool.name}
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription>{tool.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {tool.introduction}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{tool.category}</Badge>
                        <Badge variant="outline">{tool.difficulty}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center text-sm text-muted-foreground">
            共 {filteredTools.length} 个AI工具
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
