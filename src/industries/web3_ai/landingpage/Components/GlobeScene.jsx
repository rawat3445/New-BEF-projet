// GlobeScene.jsx
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobeScene = () => {
  const globeEl = useRef();

  useEffect(() => {
    const world = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('#1a1a2e')
      .showAtmosphere(false);

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.05; // Slower speed for smooth rotation
    world.controls().enableZoom = false;

    world.globeMaterial(new THREE.MeshPhongMaterial({
      color: '#00ffff',
      emissive: '#00ffff',
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    }));

    // Scroll animation
    gsap.to(globeEl.current, {
      scrollTrigger: {
        trigger: globeEl.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      scale: 0.5,
      opacity: 0,
      ease: 'power1.out',
    });
  }, []);

  return (
    <div
      ref={globeEl}
      className="w-full h-screen"
    />
  );
};

export default GlobeScene;