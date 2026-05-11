import { useEffect, useRef } from "react";

const STAGGER_Y = [-60, -280, -140, -380, -80, -320, -200, -440];
const SPEEDS = [0.9, 1.4, 0.7, 1.6, 1.1, 0.8, 1.3, 1.0];

export default function FooterBrand() {
  const rootRef = useRef(null);
  const trackRefs = useRef([]);
  const state = useRef(STAGGER_Y.map(baseY => ({
    baseY, currentX: 0, targetX: 0,
  })));

  useEffect(() => {
    state.current.forEach((s, i) => {
      if (trackRefs.current[i])
        trackRefs.current[i].style.transform = `translateY(${s.baseY}px) translateX(0px)`;
    });

    const animate = () => {
      state.current.forEach((s, i) => {
        s.currentX += (s.targetX - s.currentX) * 0.03;
        if (trackRefs.current[i])
          trackRefs.current[i].style.transform =
            `translateY(${s.baseY}px) translateX(${s.currentX}px)`;
      });
      requestAnimationFrame(animate);
    };
    animate();

    const el = rootRef.current;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const norm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      state.current.forEach((s, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        s.targetX = norm * 140 * SPEEDS[i] * dir;
      });
    };
    const onLeave = () => {
      state.current.forEach(s => { s.targetX = 0; });
    };

    let scrollTimeout;

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const norm = (window.scrollY / maxScroll) * 2 - 1;

      state.current.forEach((s, i) => {
        const dir = i % 2 === 0 ? 1 : -1;

        s.targetX = norm * 80 * dir;
      });

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        state.current.forEach((s) => {
          s.targetX = 0;
        });
      }, 150);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const wordStyle = {
    fontFamily: "'Bebas Neue', sans-serif",
    color: "#fff",
    lineHeight: 1,
    userSelect: "none",
    flexShrink: 0,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    transform: "rotate(180deg)",
    letterSpacing: "6px",
    padding: "20px 0",
    whiteSpace: "nowrap",
  };

  return (
    <div ref={rootRef}
      className="bg-black overflow-hidden rounded-xl w-full h-[340px] sm:h-[500px] flex flex-row">
      {STAGGER_Y.map((_, i) => (
        <div key={i} className="flex-1 overflow-hidden relative flex justify-center">
          <div
            ref={el => trackRefs.current[i] = el}
            className="flex flex-col items-center absolute"
            style={{ willChange: "transform" }}
          >
            {Array(4).fill("XLENTIT").map((w, j) => (
              <span key={j}
                style={wordStyle}
                className="text-[48px] sm:text-[80px]"
              >{w}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

