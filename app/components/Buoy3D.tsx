"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated 3D lifeguard buoy.
 *
 * A glossy teal torus ("buoy") that continuously rotates and bobs as if
 * floating, wrapped in an orbiting aura of particles. It reacts to the
 * pointer with a subtle parallax tilt. Honors `prefers-reduced-motion`,
 * pauses when the tab is hidden or the canvas scrolls out of view, and
 * fully disposes of its GPU resources on unmount.
 */
export default function Buoy3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // --- Renderer ---------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // --- Scene & camera ---------------------------------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    // Group lets us tilt/bob the whole assembly together.
    const buoy = new THREE.Group();
    scene.add(buoy);

    const TEAL = 0x1d9e75;

    // --- The buoy (torus) -------------------------------------------------
    const torusGeo = new THREE.TorusGeometry(2.1, 0.62, 48, 160);
    const torusMat = new THREE.MeshStandardMaterial({
      color: TEAL,
      emissive: TEAL,
      emissiveIntensity: 0.45,
      metalness: 0.35,
      roughness: 0.25,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    buoy.add(torus);

    // Thin glowing wireframe ring, slightly larger, counter-rotating.
    const ringGeo = new THREE.TorusGeometry(2.1, 0.66, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x68dbae,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    buoy.add(ring);

    // Glowing core sphere in the middle of the ring.
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x86f8c9,
      emissive: 0x22c08e,
      emissiveIntensity: 1.1,
      metalness: 0.2,
      roughness: 0.4,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    buoy.add(core);

    // --- Particle aura ----------------------------------------------------
    const PARTICLE_COUNT = 420;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute on a spherical shell around the buoy.
      const r = 3.2 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: TEAL,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Lights -----------------------------------------------------------
    scene.add(new THREE.AmbientLight(0x223a55, 1.1));

    const keyLight = new THREE.PointLight(0xffffff, 120, 100);
    keyLight.position.set(6, 7, 8);
    scene.add(keyLight);

    const tealLight = new THREE.PointLight(0x1d9e75, 90, 100);
    tealLight.position.set(-7, -4, 4);
    scene.add(tealLight);

    const rimLight = new THREE.DirectionalLight(0x4a90d9, 0.6);
    rimLight.position.set(-3, 2, -5);
    scene.add(rimLight);

    // --- Interaction state ------------------------------------------------
    const pointer = { x: 0, y: 0 };
    const targetTilt = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // --- Resize -----------------------------------------------------------
    const resize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // --- Visibility gating ------------------------------------------------
    let inView = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // --- Animation loop ---------------------------------------------------
    const clock = new THREE.Clock();
    let frameId = 0;
    let running = false;

    const renderFrame = () => {
      const t = clock.getElapsedTime();

      if (!reduceMotion) {
        buoy.rotation.y += 0.006;
        buoy.rotation.z = Math.sin(t * 0.4) * 0.08;
        buoy.position.y = Math.sin(t * 0.8) * 0.28;

        ring.rotation.x = t * 0.25;
        ring.rotation.y = -t * 0.18;

        core.rotation.x = t * 0.6;
        core.rotation.y = t * 0.4;
        coreMat.emissiveIntensity = 0.9 + Math.sin(t * 2.2) * 0.35;

        particles.rotation.y = t * 0.04;
        particles.rotation.x = t * 0.02;
      }

      // Pointer parallax (always on, but gentle).
      targetTilt.x += (pointer.y * 0.35 - targetTilt.x) * 0.04;
      targetTilt.y += (pointer.x * 0.45 - targetTilt.y) * 0.04;
      buoy.rotation.x = targetTilt.x;
      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(renderFrame);
    };

    function start() {
      if (running || !inView || document.hidden) return;
      running = true;
      clock.start();
      frameId = requestAnimationFrame(renderFrame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(frameId);
    }

    start();
    // Render one frame immediately so it isn't blank before RAF kicks in.
    renderer.render(scene, camera);

    // --- Cleanup ----------------------------------------------------------
    return () => {
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      torusGeo.dispose();
      torusMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
