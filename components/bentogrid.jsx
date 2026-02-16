import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

const BentoGrid = () => {
  const globeConfig = {
    pointSize: 2,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
  ];

  return (
    <section className="w-full py-20 px-4" style={{ background: "rgb(4,7,29)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          
          {/* Large Card with Globe - Open for Collaboration */}
          <div 
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl hover:border-purple-400/30 transition duration-200 p-8 lg:p-10 min-h-[500px] flex flex-col justify-between cursor-pointer"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            onClick={() => window.location.href = '#contact'}
          >
            
            {/* Globe Background */}
            <div className="absolute top-0 right-0 w-full h-full flex items-start justify-end">
              <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-4">
                  Available for opportunities
                </span>
              </div>
              
              <div>
                <h2 className="font-sans text-3xl lg:text-5xl max-w-96 font-bold text-white mb-4">
                  Open to remote collaboration worldwide
                </h2>
                <p className="text-gray-400 text-sm lg:text-base max-w-md mb-4">
                  Working across time zones • EST/UTC flexible
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover/bento:gap-3 transition-all">
                  <span className="text-sm font-medium">Let's connect</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:gap-8">
            
            {/* Card 1: Quick Stats */}
            <div 
              className="relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 p-6 lg:p-8 min-h-[240px]"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}>
              
              <div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-gray-400">Projects shipped</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-1">5+</div>
                    <div className="text-sm text-gray-400">Hackathons organized</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1">NCWIT</div>
                    <div className="text-sm text-gray-400">Award Winner</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Current Focus */}
            <a
              href="#projects"
              className="relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl hover:border-yellow-400/30 transition duration-200 p-6 lg:p-8 min-h-[240px] flex flex-col justify-between cursor-pointer"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}>
              
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 blur-2xl group-hover/bento:bg-yellow-400/20 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs">
                    In Progress
                  </span>
                  <svg className="w-4 h-4 text-yellow-400 group-hover/bento:translate-x-1 group-hover/bento:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                <p className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2">
                  Currently building
                </p>
                <h3 className="font-sans text-xl lg:text-2xl font-bold text-white mb-3">
                  JS Animation Library
                </h3>
                <p className="text-sm text-gray-400">
                  High-performance animations for modern web
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;