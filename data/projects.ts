export type Project = {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Reef-Log-MVP',
    description: '一個用 Github Issue、Github Actions 與 AI Agent 協作開發的實驗專案，重點在呈現 AI 輔助開發流程，而不是功能本身',
    tags: ['AI Agent', 'Github Actions', 'Workflow']
  },
  {
    title: 'Frontend Workflow System',
    description: '整理前端團隊在 Issue、PR、Code Review、版本升級與自動化流程上的實務經驗，轉化成可展示的工程案例。',
    tags: ['Frontend', 'Code Review', 'Automation']
  }
]
