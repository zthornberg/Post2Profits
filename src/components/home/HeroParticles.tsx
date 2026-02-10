"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 1500;
const BLUE = new THREE.Color("#3399FF");
const GOLD = new THREE.Color("#E7AF3E");

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const funnelTargets = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Random starting positions (chaotic scatter)
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;

      // Velocities for subtle movement
      velocities[i3] = (Math.random() - 0.5) * 0.002;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;

      // Funnel target positions
      const t = i / PARTICLE_COUNT;
      const angle = t * Math.PI * 12;
      const radius = (1 - t) * 2.5;
      const y = t * 4 - 2;
      funnelTargets[i3] = Math.cos(angle) * radius;
      funnelTargets[i3 + 1] = y;
      funnelTargets[i3 + 2] = Math.sin(angle) * radius;

      // Colors: mix of blue and gold
      const color = Math.random() > 0.8 ? GOLD : BLUE;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    let progress = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Gradually morph from chaos to funnel
      progress = Math.min(progress + 0.001, 1);
      const eased = progress * progress * (3 - 2 * progress); // smoothstep

      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;

        // Lerp toward funnel targets
        pos[i3] += (funnelTargets[i3] - pos[i3]) * eased * 0.01 + velocities[i3];
        pos[i3 + 1] +=
          (funnelTargets[i3 + 1] - pos[i3 + 1]) * eased * 0.01 +
          velocities[i3 + 1];
        pos[i3 + 2] +=
          (funnelTargets[i3 + 2] - pos[i3 + 2]) * eased * 0.01 +
          velocities[i3 + 2];
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle mouse follow
      particles.rotation.y +=
        (mouseRef.current.x * 0.2 - particles.rotation.y) * 0.02;
      particles.rotation.x +=
        (mouseRef.current.y * 0.1 - particles.rotation.x) * 0.02;

      // Slow rotation
      particles.rotation.z += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden lg:block"
      aria-hidden="true"
    />
  );
}
