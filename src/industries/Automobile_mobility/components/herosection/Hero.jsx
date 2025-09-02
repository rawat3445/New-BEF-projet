import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ChevronRight, Zap, Shield, Gauge, Navigation } from "lucide-react";
import Car from "../../../../assets/car-img.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const AutoMobilityHero = () => {
  const navigate = useNavigate();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: Zap, title: "Electric Power", desc: "100% Electric Drive" },
    { icon: Shield, title: "Advanced Safety", desc: "AI-Powered Protection" },
    { icon: Gauge, title: "Performance", desc: "0-100 in 3.2s" },
    { icon: Navigation, title: "Smart Navigation", desc: "Autonomous Driving" },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with optimized settings
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 30, 100); // Reduced fog distance
    sceneRef.current = scene;

    // Optimized camera settings
    const camera = new THREE.PerspectiveCamera(
      60, // Reduced FOV for better performance
      window.innerWidth / window.innerHeight,
      0.1,
      150 // Reduced far plane
    );
    camera.position.set(0, 15, 40);

    // Renderer with optimized settings
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Optimized controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 3;

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4477ff, 1.5, 100);
    pointLight.position.set(0, 20, 0);
    scene.add(pointLight);

    // Updated Galaxy Parameters
    const params = {
      count: 4000,
      size: 0.05,
      radius: 24,
      branches: 4,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: "#ff6030",
      outsideColor: "#1b3984",
    };

    // Create Galaxy
    const generateGalaxy = () => {
      const positions = new Float32Array(params.count * 3);
      const colors = new Float32Array(params.count * 3);
      const scales = new Float32Array(params.count);

      const colorInside = new THREE.Color(params.insideColor);
      const colorOutside = new THREE.Color(params.outsideColor);

      for (let i = 0; i < params.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * params.radius;
        const spinAngle = radius * params.spin;
        const branchAngle =
          ((i % params.branches) / params.branches) * Math.PI * 2;

        const randomX =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] =
          Math.sin(branchAngle + spinAngle) * radius + randomZ;

        // Color
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / params.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Scale
        scales[i] = Math.random() * 0.5 + 0.5;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      const material = new THREE.PointsMaterial({
        size: params.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      });

      const galaxy = new THREE.Points(geometry, material);
      scene.add(galaxy);
      return { geometry, material, galaxy };
    };

    const { geometry, material, galaxy } = generateGalaxy();

    // Animation
    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = currentTime - (deltaTime % frameInterval);

      // Rotate galaxy
      galaxy.rotation.y += 0.0003;
      galaxy.rotation.z = Math.sin(currentTime * 0.0001) * 0.1;

      controls.update();
      renderer.render(scene, camera);
    };

    animate(0);
    setIsLoaded(true);

    // Optimized resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden py-2">
      {/* 3D Scene */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-pink-500/10 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center py-4">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Intro Section */}
              <div
                className={`transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Label */}
                <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Future of Mobility
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
                  <span className="block bg-gradient-to-br from-purple-500 to-blue-400 bg-clip-text text-transparent">
                    Drive
                  </span>
                  <span className="block bg-gradient-to-br from-indigo-600 via-blue-500 to-pink-300 bg-clip-text text-transparent">
                    Tomorrow
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Experience the next generation of electric vehicles with
                  cutting-edge technology, sustainable innovation, and unmatched
                  performance.
                </p>
              </div>

              {/* Features Grid */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isActive = index === activeFeature;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveFeature(index)}
                      className={`p-5 rounded-2xl border backdrop-blur-lg transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "bg-blue-600/20 border-blue-500/40 shadow-lg scale-[1.03]"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 mb-4 transition-colors ${
                          isActive ? "text-blue-500" : "text-blue-300"
                        }`}
                      />
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button onClick={() => navigate('/about')} className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:scale-105">
                  Explore More
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column - Car Image */}
            <div
              className={`relative transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={Car}
                  alt="Car"
                  initial={{
                    x: 100,
                    y: -50,
                    scale: 0.8,
                    rotate: -5,
                    opacity: 0,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="w-full h-auto max-w-[90%] mx-auto object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto" />
            <p className="text-white font-medium">Loading the future...</p>
          </div>
        </div>
      )}

      {/* Scroll Indicator (Optional) */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div> */}
    </div>
  );
};

export default AutoMobilityHero;
