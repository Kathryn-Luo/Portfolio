import { HeroWorkflow } from "@/components/HeroWorkflow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ArrowDown, ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";

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
              <Badge size="md" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>

          <div className=" mt-6 flex gap-4">
            <Button size="lg">
              查看精選作品
              <ArrowDown className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              關於我
              <ChevronRight />
            </Button>
          </div>
        </section >
        <section className="shrink-0">
          <HeroWorkflow />
        </section>
      </div>

      <div className="mt-20">
        <div className="flex items-center">
          <h2 className="flex-none text-title">精選作品</h2>
          <span className="flex-1 bg-border h-0.5 mx-8" />
          <button className="flex-none flex items-center gap-2 hover:text-primary transition-colors">
            查看全部作品 <ChevronRight className="size-4" />
          </button>
        </div>

        <Carousel className="w-full mb-10">
          <CarouselContent className="items-stretch py-5">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/3 flex">
                <Card className="border h-full flex flex-col pt-0 ring-0 dark:border-foreground/10 hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-out">
                  <CardHeader className="p-0">
                    <div className="h-60 relative w-full overflow-hidden rounded-t-[inherit]">
                      <Image
                        src={project.coverImage?.src || ''}
                        alt={`${project.title} 專案縮圖`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover/card:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 -mb-(--card-spacing)">
                    <div>
                      <CardTitle>
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mb-2">
                        {project.subTitle}
                      </CardDescription>

                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge size="sm" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>
        </Carousel>

      </div>

    </main>
  );
}
