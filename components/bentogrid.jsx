"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const World = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 2,
  globeColor: "#0a0a20",
  showAtmosphere: true,
  atmosphereColor: "#a855f7",
  atmosphereAltitude: 0.12,
  emissive: "#0a0a20",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(168,85,247,0.4)",
  ambientLight: "#a855f7",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 33.749, lng: -84.388 },
  autoRotate: true,
  autoRotateSpeed: 0.4,
};

const colors = ["#a855f7", "#06b6d4", "#818cf8"];
const sampleArcs = [
  { order: 1, startLat: 33.749,  startLng: -84.388,  endLat: 51.5072, endLng: -0.1276,   arcAlt: 0.3,  color: colors[0] },
  { order: 1, startLat: 33.749,  startLng: -84.388,  endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2,  color: colors[1] },
  { order: 2, startLat: 33.749,  startLng: -84.388,  endLat: 48.8566, endLng: 2.3522,    arcAlt: 0.35, color: colors[2] },
  { order: 2, startLat: 33.749,  startLng: -84.388,  endLat: 35.6762, endLng: 139.6503,  arcAlt: 0.5,  color: colors[0] },
  { order: 3, startLat: 33.749,  startLng: -84.388,  endLat: 40.7128, endLng: -74.006,   arcAlt: 0.15, color: colors[1] },
  { order: 3, startLat: 33.749,  startLng: -84.388,  endLat: 1.3521,  endLng: 103.8198,  arcAlt: 0.45, color: colors[2] },
  { order: 4, startLat: 51.5072, startLng: -0.1276,  endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3,  color: colors[0] },
  { order: 4, startLat: 40.7128, startLng: -74.006,  endLat: 35.6762, endLng: 139.6503,  arcAlt: 0.4,  color: colors[1] },
];

const stats = [
  { value: "10+",   label: "projects shipped",    color: "#ffffff" },
  { value: "500+",  label: "students reached",     color: "#a855f7" },
  { value: "NCWIT", label: "honorable mention",    color: "#06b6d4" },
  { value: "4×",    label: "FBLA national awards", color: "#818cf8" },
];

const sans = "var(--font-geist-sans)";
const mono = "var(--font-geist-mono)";

const BentoGrid = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#050510",
        padding: "80px 0",
        fontFamily: sans,
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 48px" }}>

        {/* Section label */}
        <p style={{
          fontSize: 16,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#a855f7",
          margin: "0 0 48px",
          fontFamily: mono,
        }}>
          // at a glance
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 16,
        }}>

          {/* ── Globe Card ── */}
          <div
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              gridColumn: "1",
              gridRow: "1 / 3",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#07071a",
              cursor: "pointer",
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "40px",
              transition: "border-color 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
          >
            {/* Globe */}
            <div style={{
              position: "absolute",
              top: 0, right: -60,
              width: 520, height: 520,
              opacity: 0.85,
              pointerEvents: "none",
            }}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>

            {/* Fade overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #07071a 30%, transparent 70%), linear-gradient(to top, #07071a 20%, transparent 60%)",
              pointerEvents: "none",
            }} />

            {/* Top tag */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{
                display: "inline-block",
                fontSize: 11,
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.3)",
                padding: "4px 12px",
                marginBottom: 20,
                fontFamily: sans,
                fontWeight: 500,
              }}>
                available for opportunities
              </span>
            </div>

            {/* Bottom text */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <h2 style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0 0 12px",
                letterSpacing: "-1.5px",
                lineHeight: 1.05,
                maxWidth: 340,
                fontFamily: sans,
              }}>
                <span style={{ color: "#a855f7" }}>&lt;</span>
                Open to collaboration
                <span style={{ color: "#a855f7" }}>/&gt;</span>
              </h2>
              <p style={{ fontSize: 13, color: "#b9b9bd", margin: "0 0 24px", fontFamily: sans }}>
                Cumming, GA · EST · remote-friendly
              </p>
              <span style={{
                fontSize: 13,
                color: "#a855f7",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: sans,
                fontWeight: 500,
              }}>
                Let's connect →
              </span>
            </div>
          </div>

          {/* ── Stats Card ── */}
          <div style={{
            gridColumn: "2",
            gridRow: "1",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#07071a",
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px 32px",
            transition: "border-color 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
          >
            <div style={{ gridColumn: "1 / -1", marginBottom: 4 }}>
              <p style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#b9b9bd",
                margin: 0,
                fontFamily: mono,
              }}>
                by the numbers
              </p>
            </div>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: "clamp(28px, 2.5vw, 40px)",
                  fontWeight: 800,
                  color: s.color,
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  marginBottom: 6,
                  fontFamily: sans,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: 12,
                  color: "#b9b9bd",
                  fontFamily: sans,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Currently Building Card ── */}
          <a
            href="projects"
            style={{
              gridColumn: "2",
              gridRow: "2",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#07071a",
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.25s",
              minHeight: 200,
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(6,182,212,0.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
          >
            {/* Subtle glow */}
            <div style={{
              position: "absolute",
              top: -40, right: -40,
              width: 140,
              height: 140,
              background: "rgba(6,182,212,0.06)",
              borderRadius: "50%",
              filter: "blur(40px)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{
                  fontSize: 11,
                  color: "#06b6d4",
                  border: "1px solid rgba(6,182,212,0.3)",
                  padding: "3px 10px",
                  fontFamily: sans,
                  fontWeight: 500,
                }}>
                  in progress
                </span>
                <span style={{ fontSize: 13, color: "#06b6d4", fontFamily: sans }}>↗</span>
              </div>

              <p style={{
                fontSize: 11,
                color: "#b9b9bd",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 8px",
                fontFamily: mono,
              }}>
                currently building
              </p>
              <h3 style={{
                fontSize: "clamp(20px, 2vw, 28px)",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0 0 8px",
                letterSpacing: "-0.8px",
                lineHeight: 1.1,
                fontFamily: sans,
              }}>
                SecuriTV
              </h3>
              <p style={{ fontSize: 13, color: "#444462", margin: 0, lineHeight: 1.7, fontFamily: sans }}>
                Next.js · GSAP · Cybersecurity · Always iterating
              </p>
            </div>
          </a>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;