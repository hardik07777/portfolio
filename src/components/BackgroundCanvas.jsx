import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const SYMBOLS = ["</>", "{ }", "()", "=>", "[]", "&&", "||", "fn()", "0x"];
    const MAJOR = 150; // 🔥 better visual density

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function render() {
      const W = window.innerWidth;
      const H = Math.max(window.innerHeight, document.body.scrollHeight);

      canvas.width = W;
      canvas.height = H;

      ctx.clearRect(0, 0, W, H);

      const dark = isDark();

      const lineC = dark
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.06)";

      const dotC = dark
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.18)";

      const symC = dark
        ? "rgba(255,255,255,0.32)"   // brighter in dark mode
  : "rgba(0,0,0,0.28)";

      // 🔥 ALIGNMENT
      const baseOffsetX = (W / 2) % MAJOR;
      const SHIFT = 40; // tweak for left/right shift
      const offsetX = baseOffsetX + SHIFT;

      const hero = document.querySelector(".max-w-4xl");
      const rect = hero?.getBoundingClientRect();
      const scrollY = window.scrollY;

      const centerY = rect
        ? rect.top + scrollY + rect.height / 2
        : window.innerHeight / 2;

      const offsetY = centerY % MAJOR;

      // =========================
      // 🔹 GRID LINES
      // =========================
      ctx.strokeStyle = lineC;
      ctx.lineWidth = 1;

      for (let x = -offsetX; x <= W; x += MAJOR) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      for (let y = -offsetY; y <= H; y += MAJOR) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // =========================
      // 🔹 DOTS (intersections)
      // =========================
      ctx.fillStyle = dotC;

      for (let x = -offsetX; x <= W; x += MAJOR) {
        for (let y = -offsetY; y <= H; y += MAJOR) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // =========================
      // 🔹 SYMBOLS (cell center)
      // =========================
      ctx.font = "500 10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = symC;

      let i = 0;

      for (let x = MAJOR / 2 - offsetX; x < W; x += MAJOR) {
        for (let y = MAJOR / 2 - offsetY; y < H; y += MAJOR) {
          ctx.fillText(SYMBOLS[i % SYMBOLS.length], x, y);
          i++;
        }
      }
    }

    render();

    window.addEventListener("resize", render);
    window.addEventListener("scroll", render);

    const observer = new MutationObserver(render);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("resize", render);
      window.removeEventListener("scroll", render);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Blur Overlay (optional, very light now) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, transparent 30%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, transparent 30%, black 100%)",
        }}
      />
    </>
  );
}