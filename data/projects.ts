import type { StaticImageData } from "next/image";
import reefLogCover from '@/assets/projects/reef-log-mvp/cover.png'
import frontendWorkflowCover from '@/assets/projects/frontend-workflow/cover.png'
import nuxtLayerCover from '@/assets/projects/nuxt-layer/cover.png'

export type Project = {
  coverImage?: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
  tags: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    title: 'AI Agent 開發流程實驗',
    subTitle: 'Reef-Log-MVP',
    description: '以 GitHub Actions 打造 AI 驅動的開發流程，串接 Codex 與 Claude，探索 AI Agent 在軟體開發全生命週期的應用。',
    tags: ['GitHub Actions', 'AI Agent', 'Automation'],
    coverImage: reefLogCover,
  },
  {
    title: '共用認證架構',
    subTitle: 'Nuxt Layers',
    description: '設計可重複使用的登入與權限架構，支援多個 Nuxt 專案，提升一致性與維護效率。',
    tags: ['Nuxt', 'TypeScript', 'Architecture'],
    coverImage: nuxtLayerCover,
  },
  {
    title: '前端開發流程優化',
    subTitle: 'Developer Experience',
    description: '建立清晰的 Issue、Review 與自動化流程，提升團隊協作效率與程式碼品質。',
    tags: ['GitHub', 'n8n', 'Process'],
    coverImage: frontendWorkflowCover,
  }
]
