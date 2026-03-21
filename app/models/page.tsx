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
import { aiModels } from "@/lib/data"

const filters = [
  { id: "all", name: "全部" },
  { id: "入门友好", name: "入门友好" },
  { id: "非常友好", name: "非常友好" },
]

export default function ModelsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredModels = aiModels.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.introduction.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      activeFilter === "all" || model.difficulty === activeFilter

    return matchesSearch && matchesFilter
  })

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
              AI大模型
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              了解主流AI大模型
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              探索ChatGPT、Claude、文心一言等主流AI大模型，
              了解它们的特点和使用场景，找到最适合你的AI助手。
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
                placeholder="搜索大模型名称或公司..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {filters.map((filter) => (
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

      {/* Models Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredModels.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">没有找到匹配的大模型</p>
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
              {filteredModels.map((model) => (
                <Link key={model.id} href={`/models/${model.id}`}>
                  <Card className="h-full card-hover group">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{model.logo}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {model.name}
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription>{model.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {model.introduction}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{model.type}</Badge>
                        <Badge variant="outline">{model.difficulty}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center text-sm text-muted-foreground">
            共 {filteredModels.length} 个AI大模型
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
