import Link from "next/link"
import { Sparkles } from "lucide-react"

const footerLinks = {
  学习资源: [
    { name: "AI大模型", href: "/models" },
    { name: "编程工具", href: "/programming-tools" },
    { name: "AI工具", href: "/ai-tools" },
    { name: "学习路径", href: "/learning-path" },
  ],
  关于我们: [
    { name: "关于本站", href: "/about" },
    { name: "联系我们", href: "/contact" },
    { name: "隐私政策", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AI入门学习</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              一个轻量化的AI入门学习平台，帮助你快速了解AI基础知识，
              掌握主流AI大模型和实用工具，开启你的AI学习之旅。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI入门学习. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}
