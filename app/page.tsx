import { HeroWorkflow } from "@/components/HeroWorkflow";
import { Badge } from "@/components/ui/badge";

const skillList = [
  'Vue',
  'Nuxt',
  'TypeSctipt',
  'Github Actions',
  'AI Agent',
  'Automation'
]


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden mx-auto w-full max-w-7xl px-5 pt-20">
      <div className="flex">
        <section className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border" >
            <span className="inline-block bg-primary h-2 w-2 rounded-full" />
            <span className="text-sm">
              Frontent Engineer
            </span>
          </div>

          <h1 className="text-display mt-5">
            打造可維護的前端系統<br />
            並持續探索<span className="text-primary"> AI Agent</span> 開發流程
          </h1>

          <p className="text-muted mt-5 text-[clamp(15px, 1.4vw, 17px)]">
            結合架構設計、開發流程與產品思維<br />
            讓開發更有效率，也更有溫度
          </p>


          <div className=" mt-6 flex flex-wrap gap-2.5">
            {skillList.map((skill) => (
              <Badge variant="outline" size="md" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </section >
        <section className="shrink-0">
          <HeroWorkflow />
        </section>
      </div>

    </main>
  );
}
