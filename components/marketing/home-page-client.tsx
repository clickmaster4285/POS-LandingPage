"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/marketing/hero"
import { TrustedClients } from "@/components/marketing/trusted-clients"
import { POSSystems } from "@/components/marketing/pos-systems"
import { Features } from "@/components/marketing/features"
import { PosDemoSection, type PosDemoScene } from "@/components/marketing/pos-demo-section"
import { Testimonials } from "@/components/marketing/testimonials"
import { PosFaq } from "@/components/marketing/pos-faq"
import { CTA } from "@/components/marketing/cta"
import { SplineModal } from "@/components/marketing/spline-modal"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const splineScenes: PosDemoScene[] = [
  {
    id: "pos-system",
    name: "POS System 3D",
    scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
    thumbnail: "/thumbnails/pos-system.jpg",
    description: "Interactive 3D visualization of our POS system",
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
    thumbnail: "/thumbnails/analytics.jpg",
    description: "Real-time sales and reporting views",
  },
  {
    id: "mobile-pos",
    name: "Mobile POS",
    scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
    thumbnail: "/thumbnails/mobile-pos.jpg",
    description: "Mobile point-of-sale and mPOS workflows",
  },
]

export function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSplineScene, setActiveSplineScene] = useState<string>(
    "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
  )

  const openModal = (sceneUrl?: string) => {
    if (sceneUrl) setActiveSplineScene(sceneUrl)
    setIsModalOpen(true)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("pos") !== "1") return
    const el = document.getElementById("solution")
    el?.scrollIntoView({ behavior: "smooth" })
    params.delete("pos")
    const qs = params.toString()
    window.history.replaceState({}, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`)
  }, [])

  return (
    <div className="min-h-screen bg-background relative" id="top">
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          type="button"
          onClick={() => openModal()}
          className="h-12 sm:h-14 px-4 sm:px-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105 group"
        >
          <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
          <span className="hidden sm:inline">Explore 3D Demo</span>
          <span className="sm:hidden">3D Demo</span>
        </Button>
      </div>

      <SplineModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scene={activeSplineScene}
        scenes={splineScenes}
        onSceneChange={setActiveSplineScene}
      />

      <Hero openSplineModal={() => openModal()} />

      {/* POS landing flow: capabilities → industries → demo → proof → FAQ → pricing */}
      <TrustedClients />
      <Features />
      <POSSystems limit={15} showViewAll />
      <PosDemoSection
        scenes={splineScenes}
        onOpenScene={(url) => openModal(url)}
        onOpenDefault={() => openModal()}
      />
      <Testimonials />
      <PosFaq />
      <CTA />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #d946ef);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #c026d3);
        }
      `}</style>
    </div>
  )
}
