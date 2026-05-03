"use client"
import { useEffect, useRef } from "react"

interface WavyBackgroundProps {
  className?: string
  intensity?: number
}

export function WavyBackground({ className = "", intensity = 1 }: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const animate = () => {
      const { width, height } = canvas
      const actualWidth = width / window.devicePixelRatio
      const actualHeight = height / window.devicePixelRatio

      ctx.clearRect(0, 0, actualWidth, actualHeight)

      // Create multiple wave layers with different colors and speeds
      const waves = [
        { color: "rgba(139, 92, 246, 0.3)", speed: 0.02, amplitude: 60, frequency: 0.01 },
        { color: "rgba(168, 85, 247, 0.2)", speed: 0.015, amplitude: 80, frequency: 0.008 },
        { color: "rgba(196, 181, 253, 0.15)", speed: 0.025, amplitude: 40, frequency: 0.012 },
        { color: "rgba(124, 58, 237, 0.25)", speed: 0.018, amplitude: 100, frequency: 0.006 },
      ]

      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.fillStyle = wave.color

        const points: [number, number][] = []

        for (let x = 0; x <= actualWidth + 50; x += 10) {
          const y1 = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude * intensity
          const y2 = Math.cos(x * wave.frequency * 0.7 + time * wave.speed * 1.2) * wave.amplitude * 0.5 * intensity
          const y = actualHeight * 0.15 - y1 - y2 - index * 20
          points.push([x, y])
        }

        // Draw smooth wave using bezier curves
        ctx.moveTo(points[0][0], points[0][1])

        for (let i = 1; i < points.length - 2; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2
          const yc = (points[i][1] + points[i + 1][1]) / 2
          ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc)
        }

        ctx.lineTo(actualWidth, 0)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fill()
      })

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  )
}
