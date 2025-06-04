import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three"; // Required by Vanta

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE, // ✅ IMPORTANT: Provide THREE here

          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff4282,
          backgroundColor: 0x201338,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="relative w-full h-[700px] flex items-center justify-center text-white"
    >
      <div className="absolute z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
