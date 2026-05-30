import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import './LogoScene.css'

/**
 * Loads the logo PNG and keys out the near-white background so only the
 * dark "AE" marks remain. Returns a CanvasTexture with proper alpha.
 */
function useTransparentLogo(src: string) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const px = data.data
      for (let i = 0; i < px.length; i += 4) {
        // near-white -> fully transparent
        if (px[i] > 235 && px[i + 1] > 235 && px[i + 2] > 235) {
          px[i + 3] = 0
        }
      }
      ctx.putImageData(data, 0, 0)

      const tex = new THREE.CanvasTexture(canvas)
      tex.colorSpace = THREE.SRGBColorSpace
      setTexture(tex)
    }
  }, [src])

  return texture
}

/** Returns a cropped clone of the texture showing a horizontal slice. */
function cropTexture(base: THREE.CanvasTexture, offsetX: number, repeatX: number) {
  const tex = base.clone()
  tex.needsUpdate = true
  tex.offset.set(offsetX, 0)
  tex.repeat.set(repeatX, 1)
  return tex
}

function LogoMesh({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const eRef = useRef<THREE.Mesh>(null)
  const base = useTransparentLogo('/aedition-logo.png')

  // Split the texture into left (A) and right (E) halves once it's loaded.
  const halves = useMemo(() => {
    if (!base) return null
    return {
      left: cropTexture(base, 0, 0.5),
      right: cropTexture(base, 0.5, 0.5),
    }
  }, [base])

  useFrame(() => {
    if (!eRef.current) return
    // spin only the E around its own vertical axis, driven by scroll
    eRef.current.rotation.y = scrollY.current * 0.006
  })

  if (!halves) return null

  const halfW = 1.6
  const height = 3.2

  return (
    <group>
      {/* Left half: the A + left of the wordmark — stays stationary */}
      <mesh position={[-halfW / 2, 0, 0]}>
        <planeGeometry args={[halfW, height]} />
        <meshBasicMaterial map={halves.left} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* Right half: the E — spins in place */}
      <mesh ref={eRef} position={[halfW / 2, 0, 0]}>
        <planeGeometry args={[halfW, height]} />
        <meshBasicMaterial map={halves.right} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function LogoScene({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  return (
    <div className="logo-scene">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
        <LogoMesh scrollY={scrollY} />
      </Canvas>
    </div>
  )
}
