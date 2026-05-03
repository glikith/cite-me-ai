"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  intensity?: number
  speed?: number
  hue?: number
}

export default function AnimatedBackground({ intensity = 0.3, speed = 0.5, hue = 280 }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }

    const animate = () => {
      if (!ctx || !canvas) return

      time += 0.01 * speed

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.8,
      )

      gradient.addColorStop(0, `hsla(${hue}, 70%, 20%, ${intensity * 0.3})`)
      gradient.addColorStop(0.5, `hsla(${hue + 20}, 60%, 15%, ${intensity * 0.2})`)
      gradient.addColorStop(1, `hsla(${hue - 20}, 50%, 10%, ${intensity * 0.1})`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add floating particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time + i * 0.5) * 0.3 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.7 + i * 0.3) * 0.3 + 0.5) * canvas.height
        const size = Math.sin(time + i) * 2 + 3

        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        particleGradient.addColorStop(0, `hsla(${hue + i * 10}, 80%, 60%, ${intensity * 0.4})`)
        particleGradient.addColorStop(1, `hsla(${hue + i * 10}, 80%, 60%, 0)`)

        ctx.fillStyle = particleGradient
        ctx.beginPath()
        ctx.arc(x, y, size * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [intensity, speed, hue])

  return <canvas ref={canvasRef} className="w-full h-full block" style={{ mixBlendMode: "multiply" }} />
}
