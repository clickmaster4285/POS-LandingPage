// components/marketing/spline-modal.tsx
"use client"

import { useEffect,useState, useRef } from "react"
import dynamic from "next/dynamic"
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  ),
})

interface SplineModalProps {
  isOpen: boolean
  onClose: () => void
  scene: string
  scenes?: Array<{
    id: string
    name: string
    scene: string
    thumbnail: string
    description: string
  }>
  onSceneChange?: (scene: string) => void
}

export function SplineModal({ 
  isOpen, 
  onClose, 
  scene, 
  scenes = [],
  onSceneChange 
}: SplineModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handlePrevScene = () => {
    if (scenes.length > 0 && onSceneChange) {
      const newIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length
      setCurrentSceneIndex(newIndex)
      onSceneChange(scenes[newIndex].scene)
    }
  }

  const handleNextScene = () => {
    if (scenes.length > 0 && onSceneChange) {
      const newIndex = (currentSceneIndex + 1) % scenes.length
      setCurrentSceneIndex(newIndex)
      onSceneChange(scenes[newIndex].scene)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal content */}
      <div 
        ref={modalRef}
        className="relative w-[95vw] h-[90vh] max-w-7xl bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-violet-500/20"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center gap-4">
            <h3 className="text-white font-semibold text-lg">
              {scenes[currentSceneIndex]?.name || '3D Interactive Experience'}
            </h3>
            {scenes.length > 0 && (
              <span className="text-white/60 text-sm">
                {currentSceneIndex + 1} / {scenes.length}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/10"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation arrows */}
        {scenes.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevScene}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextScene}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Scene info overlay */}
        {scenes[currentSceneIndex] && (
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <p className="text-white/90 text-sm max-w-2xl">
              {scenes[currentSceneIndex].description}
            </p>
          </div>
        )}

        {/* Spline scene */}
        <div className="absolute inset-0">
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet-500/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-fuchsia-500/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}