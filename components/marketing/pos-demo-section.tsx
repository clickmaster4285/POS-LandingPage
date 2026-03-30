"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export type PosDemoScene = {
  id: string
  name: string
  scene: string
  thumbnail: string
  description: string
}

interface PosDemoSectionProps {
  scenes: PosDemoScene[]
  onOpenScene: (sceneUrl: string) => void
  onOpenDefault: () => void
}

export function PosDemoSection({ scenes, onOpenScene, onOpenDefault }: PosDemoSectionProps) {
  return (
    <section
      id="demo"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="demo-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-fuchsia-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-600 dark:text-violet-400 mb-3">
            Product tour
          </p>
          <h2
            id="demo-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance"
          >
            <span className="gradient-text">Interactive POS</span>{" "}
            <span className="text-foreground">demo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore checkout, analytics, and mobile point-of-sale in 3D—similar to how buyers
            evaluate modern tablet POS and terminal experiences before rollout.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              role="button"
              tabIndex={0}
              onClick={() => onOpenScene(scene.scene)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onOpenScene(scene.scene)
                }
              }}
              className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 hover:border-violet-500/40 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-violet-500/40 animate-pulse" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{scene.name}</h3>
                <p className="text-white/80 text-sm">{scene.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            onClick={onOpenDefault}
            className="h-12 px-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/20"
          >
            <Sparkles className="w-4 h-4" />
            Launch full 3D POS demo
          </Button>
        </div>
      </div>
    </section>
  )
}
