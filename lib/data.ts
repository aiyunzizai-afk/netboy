// AI大模型数据
export const aiModels = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    logo: "🤖",
    type: "对话大模型",
    introduction:
      "由OpenAI开发的对话式AI，能够理解和生成人类语言，可用于问答、写作、编程辅助等多种场景。",
    features: ["自然语言对话", "文本生成", "代码辅助", "知识问答"],
    useCases: "适合日常问答、内容创作、学习辅助、编程帮助等场景。",
    difficulty: "入门友好",
    url: "https://chat.openai.com",
  },
  {
    id: "claude",
    name: "Claude",
    company: "Anthropic",
    logo: "🎭",
    type: "对话大模型",
    introduction:
      "由Anthropic开发的AI助手，注重安全和有用性，擅长长文本理解和分析，对话风格友好自然。",
    features: ["长文本理解", "深度分析", "安全对话", "多语言支持"],
    useCases: "适合文档分析、学术研究、创意写作、复杂问题解答等。",
    difficulty: "入门友好",
    url: "https://claude.ai",
  },
  {
    id: "gemini",
    name: "Gemini",
    company: "Google",
    logo: "✨",
    type: "多模态大模型",
    introduction:
      "Google推出的多模态AI模型，能同时理解文本、图像、音频等多种形式的信息，功能强大且易于使用。",
    features: ["多模态理解", "图像识别", "代码生成", "实时信息"],
    useCases: "适合需要处理多种媒体类型的任务，如图片分析、跨模态问答等。",
    difficulty: "入门友好",
    url: "https://gemini.google.com",
  },
  {
    id: "wenxin",
    name: "文心一言",
    company: "百度",
    logo: "📚",
    type: "对话大模型",
    introduction:
      "百度推出的中文大模型，对中文理解能力强，支持文本创作、问答对话、代码生成等多种功能。",
    features: ["中文优化", "多模态能力", "知识增强", "本土化服务"],
    useCases: "适合中文内容创作、国内场景应用、中文问答等。",
    difficulty: "入门友好",
    url: "https://yiyan.baidu.com",
  },
  {
    id: "tongyi",
    name: "通义千问",
    company: "阿里巴巴",
    logo: "🌟",
    type: "对话大模型",
    introduction:
      "阿里巴巴推出的大语言模型，支持多轮对话、文本创作、代码编写等，与阿里生态深度集成。",
    features: ["多轮对话", "知识检索", "任务执行", "电商场景"],
    useCases: "适合日常问答、商业应用、内容创作等场景。",
    difficulty: "入门友好",
    url: "https://qianwen.aliyun.com",
  },
  {
    id: "doubao",
    name: "豆包",
    company: "字节跳动",
    logo: "🫘",
    type: "对话大模型",
    introduction:
      "字节跳动推出的AI助手，界面友好，支持日常对话、内容创作、问题解答等，是入门AI的好选择。",
    features: ["友好交互", "内容创作", "知识问答", "多场景支持"],
    useCases: "适合日常聊天、创意写作、学习辅助、生活问答等。",
    difficulty: "非常友好",
    url: "https://www.doubao.com",
  },
]

// AI编程工具数据
export const programmingTools = [
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    company: "GitHub/Microsoft",
    logo: "👨‍✈️",
    type: "代码补全",
    introduction:
      "AI编程助手，能根据代码上下文自动补全代码，支持多种编程语言，大幅提升编程效率。",
    features: ["智能补全", "代码生成", "多语言支持", "IDE集成"],
    languages: ["Python", "JavaScript", "TypeScript", "Go", "Java"],
    useCases: "适合日常编程、快速原型开发、学习新语言等。",
    difficulty: "需要基础编程知识",
    url: "https://github.com/features/copilot",
  },
  {
    id: "cursor",
    name: "Cursor",
    company: "Cursor Inc.",
    logo: "🖱️",
    type: "AI编辑器",
    introduction:
      "专为AI时代设计的代码编辑器，内置AI对话功能，可以直接与AI讨论代码并进行修改。",
    features: ["AI对话", "代码重构", "智能搜索", "多文件编辑"],
    languages: ["所有主流语言"],
    useCases: "适合想要深度AI辅助编程的开发者。",
    difficulty: "入门友好",
    url: "https://cursor.sh",
  },
  {
    id: "v0",
    name: "v0",
    company: "Vercel",
    logo: "▲",
    type: "UI生成",
    introduction:
      "Vercel推出的AI UI生成工具，通过自然语言描述即可生成React组件和完整页面，无需手写代码。",
    features: ["UI生成", "组件库", "实时预览", "代码导出"],
    languages: ["React", "TypeScript", "Tailwind CSS"],
    useCases: "适合快速构建前端界面、原型设计。",
    difficulty: "零门槛",
    url: "https://v0.dev",
  },
  {
    id: "replit",
    name: "Replit AI",
    company: "Replit",
    logo: "💻",
    type: "在线IDE",
    introduction:
      "在线编程平台，内置AI助手，支持多种语言，可以直接在浏览器中编写和运行代码。",
    features: ["在线编程", "AI辅助", "协作功能", "一键部署"],
    languages: ["Python", "JavaScript", "HTML/CSS", "50+语言"],
    useCases: "适合初学者学习编程、快速实验项目。",
    difficulty: "零门槛",
    url: "https://replit.com",
  },
  {
    id: "codeium",
    name: "Codeium",
    company: "Codeium",
    logo: "⚡",
    type: "代码补全",
    introduction:
      "免费的AI代码补全工具，支持VS Code等主流编辑器，为个人开发者提供免费使用。",
    features: ["免费使用", "智能补全", "多IDE支持", "快速响应"],
    languages: ["70+编程语言"],
    useCases: "适合预算有限但想体验AI编程的开发者。",
    difficulty: "需要基础编程知识",
    url: "https://codeium.com",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    company: "Tabnine",
    logo: "🔮",
    type: "代码补全",
    introduction:
      "老牌AI代码补全工具，支持本地模型运行，保护代码隐私，适合企业和注重隐私的开发者。",
    features: ["本地运行", "隐私保护", "团队协作", "代码规范"],
    languages: ["所有主流语言"],
    useCases: "适合注重代码隐私的企业和开发者。",
    difficulty: "需要基础编程知识",
    url: "https://www.tabnine.com",
  },
]

// AI工具数据（非编程类）
export const aiTools = [
  {
    id: "midjourney",
    name: "Midjourney",
    company: "Midjourney Inc.",
    logo: "🎨",
    category: "AI绘画",
    introduction:
      "顶级AI图像生成工具，通过文字描述即可创作高质量艺术图像，风格多样，效果惊艳。",
    features: ["艺术风格", "高质量输出", "风格多样", "社区分享"],
    useCases: "适合创意设计、艺术创作、概念可视化等。",
    difficulty: "入门友好",
    url: "https://midjourney.com",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    company: "Stability AI",
    logo: "🖼️",
    category: "AI绘画",
    introduction:
      "开源的AI图像生成模型，可本地运行，支持高度自定义，是AI绘画入门的好选择。",
    features: ["开源免费", "本地运行", "高度可定制", "模型丰富"],
    useCases: "适合想深入学习AI绘画、需要本地部署的用户。",
    difficulty: "需要一定技术基础",
    url: "https://stability.ai",
  },
  {
    id: "jimeng",
    name: "即梦AI",
    company: "字节跳动",
    logo: "🌙",
    category: "AI绘画",
    introduction:
      "字节跳动推出的AI创作平台，支持图片生成、视频创作等，界面简洁，非常适合入门用户。",
    features: ["图片生成", "视频创作", "模板丰富", "中文友好"],
    useCases: "适合内容创作者、社交媒体运营、个人创作。",
    difficulty: "非常友好",
    url: "https://jimeng.jianying.com",
  },
  {
    id: "tongyi-wanxiang",
    name: "通义万相",
    company: "阿里巴巴",
    logo: "🎭",
    category: "AI绘画",
    introduction:
      "阿里巴巴推出的AI图像创作工具，支持文生图、图片编辑等功能，中文理解能力强。",
    features: ["文生图", "图片编辑", "风格迁移", "中文优化"],
    useCases: "适合需要中文描述生成图片的用户。",
    difficulty: "入门友好",
    url: "https://tongyi.aliyun.com/wanxiang",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    company: "Notion",
    logo: "📝",
    category: "AI写作",
    introduction:
      "集成在Notion中的AI助手，可帮助写作、总结、翻译、头脑风暴等，提升工作效率。",
    features: ["写作辅助", "内容总结", "翻译功能", "模板生成"],
    useCases: "适合文档工作者、内容创作者、学生等。",
    difficulty: "入门友好",
    url: "https://notion.so",
  },
  {
    id: "gamma",
    name: "Gamma",
    company: "Gamma",
    logo: "📊",
    category: "AI演示",
    introduction:
      "AI驱动的演示文稿制作工具，输入主题即可自动生成精美的PPT，大幅节省制作时间。",
    features: ["一键生成PPT", "精美模板", "协作编辑", "多种导出"],
    useCases: "适合需要快速制作演示文稿的职场人士、学生等。",
    difficulty: "零门槛",
    url: "https://gamma.app",
  },
  {
    id: "descript",
    name: "Descript",
    company: "Descript",
    logo: "🎬",
    category: "AI视频",
    introduction:
      "AI视频编辑工具，可以像编辑文档一样编辑视频，支持AI配音、字幕生成等功能。",
    features: ["视频转文字", "AI配音", "一键剪辑", "字幕生成"],
    useCases: "适合视频创作者、播客制作者、内容运营。",
    difficulty: "入门友好",
    url: "https://www.descript.com",
  },
  {
    id: "runwayml",
    name: "Runway",
    company: "Runway",
    logo: "🎥",
    category: "AI视频",
    introduction:
      "强大的AI视频生成和编辑平台，支持文字生成视频、视频编辑、特效制作等前沿功能。",
    features: ["文生视频", "视频编辑", "AI特效", "创意工具"],
    useCases: "适合视频创作者、导演、创意工作者。",
    difficulty: "入门友好",
    url: "https://runwayml.com",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    company: "ElevenLabs",
    logo: "🔊",
    category: "AI语音",
    introduction:
      "顶级AI语音合成平台，可以克隆声音、生成自然的语音，效果逼真度极高。",
    features: ["语音克隆", "多语言", "情感表达", "高保真"],
    useCases: "适合配音、有声书制作、内容创作等。",
    difficulty: "入门友好",
    url: "https://elevenlabs.io",
  },
]

// 分类数据
export const modelCategories = [
  { id: "all", name: "全部", icon: "🌐" },
  { id: "dialogue", name: "对话模型", icon: "💬" },
  { id: "multimodal", name: "多模态", icon: "🖼️" },
  { id: "chinese", name: "国产大模型", icon: "🇨🇳" },
]

export const toolCategories = [
  { id: "all", name: "全部", icon: "🌐" },
  { id: "completion", name: "代码补全", icon: "⚡" },
  { id: "editor", name: "AI编辑器", icon: "📝" },
  { id: "generator", name: "代码生成", icon: "🔧" },
]

export const aiToolCategories = [
  { id: "all", name: "全部", icon: "🌐" },
  { id: "painting", name: "AI绘画", icon: "🎨" },
  { id: "writing", name: "AI写作", icon: "✍️" },
  { id: "video", name: "AI视频", icon: "🎬" },
  { id: "audio", name: "AI语音", icon: "🔊" },
]
