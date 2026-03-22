import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "AI入门学习 - 轻松掌握AI基础知识",
  description:
    "一个面向AI入门学习者的轻量化学习平台，涵盖AI大模型、编程工具、AI工具介绍，内容通俗易懂，帮助你快速入门AI世界。",
  keywords: ["AI入门", "人工智能", "机器学习", "AI大模型", "ChatGPT", "AI工具"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
