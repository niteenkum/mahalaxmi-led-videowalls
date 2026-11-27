"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface LogoPreloaderProps {
  visible: boolean;
  runKey: number;
}

export default function LogoPreloader({ visible, runKey }: LogoPreloaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={`preloader-${runKey}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6 text-white select-none"
          aria-live="polite"
          aria-label="Loading Mahalaxmi Visuals Home Page"
        >
          {/* Ambient radial glow behind the 3D logo */}
          <div
            className="pointer-events-none absolute h-80 w-80 rounded-full opacity-35 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(245,180,60,0.45) 0%, rgba(160,190,220,0.2) 50%, transparent 75%)",
            }}
          />

          {/* 3D Rotating Logo Stage */}
          <div style={{ perspective: 1200 }} className="relative z-10">
            <motion.div
              initial={{ rotateY: 0, rotateX: 8, scale: 0.85, opacity: 0 }}
              animate={{
                rotateY: [0, 360],
                rotateX: [8, -6, 0],
                scale: [0.88, 1.05, 1],
                opacity: 1,
              }}
              transition={{
                duration: 2.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative h-[180px] w-[270px] sm:h-[220px] sm:w-[330px]"
            >
              <Image
                src="/images/logo.png"
                alt="Mahalaxmi Visuals Private Limited — LED Video Walls"
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-[0_0_32px_rgba(245,180,60,0.25)]"
                sizes="330px"
              />
            </motion.div>
          </div>

          {/* 3-Second Loading Progress Bar */}
          <div className="relative z-10 mt-8 w-56 sm:w-64 space-y-2.5 text-center">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3, ease: "linear" }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full rounded-full bg-gradient-to-r from-amber-400 via-yellow-200 to-zinc-200"
              />
            </div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              Mahalaxmi Visuals • Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
