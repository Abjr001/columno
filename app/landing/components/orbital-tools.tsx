// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "motion/react";
// import ColumnoC from "@/public/columno-w-bg.png";

// // ── Data ──────────────────────────────────────────────────────────────────────

// const tools = [
//   { icon: "📋", label: "Tasks", desc: "Gérez vos tâches" },
//   { icon: "📊", label: "Analytics", desc: "Analysez vos données" },
//   { icon: "📅", label: "Calendar", desc: "Planifiez votre temps" },
//   { icon: "👥", label: "Team", desc: "Collaborez ensemble" },
//   { icon: "🎯", label: "Goals", desc: "Atteignez vos cibles" },
//   { icon: "⚡", label: "Sprints", desc: "Accélérez la cadence" },
// ];

// // ── Hex geometry — tout en unités SVG (viewBox 0 0 600 600) ──────────────────
// const VB = 600; // viewBox size
// const C = VB / 2; // centre = 300
// const R = 195; // rayon hex (nœuds)

// function hexPoint(index: number) {
//   const angle = (Math.PI / 3) * index - Math.PI / 6;
//   return { x: C + R * Math.cos(angle), y: C + R * Math.sin(angle) };
// }

// const points = tools.map((_, i) => hexPoint(i));

// // ── Sub-components ────────────────────────────────────────────────────────────

// function ConnectorLine({
//   x,
//   y,
//   active,
//   index,
// }: {
//   x: number;
//   y: number;
//   active: boolean;
//   index: number;
// }) {
//   return (
//     <motion.line
//       x1={C}
//       y1={C}
//       x2={x}
//       y2={y}
//       stroke={active ? "#34d399" : "#d1fae5"}
//       strokeWidth={active ? 2 : 1}
//       strokeLinecap="round"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
//     />
//   );
// }

// function PulseDot({ x, y, index }: { x: number; y: number; index: number }) {
//   return (
//     <motion.circle
//       r={3.5}
//       fill="#34d399"
//       animate={{
//         cx: [C, x, C],
//         cy: [C, y, C],
//         opacity: [0, 1, 0],
//       }}
//       transition={{
//         duration: 2.6,
//         repeat: Infinity,
//         delay: index * 0.6,
//         ease: "easeInOut",
//         repeatDelay: 1.0,
//       }}
//     />
//   );
// }

// function ToolNode({
//   tool,
//   point,
//   index,
//   active,
//   onHover,
// }: {
//   tool: (typeof tools)[0];
//   point: { x: number; y: number };
//   index: number;
//   active: boolean;
//   onHover: (i: number | null) => void;
// }) {
//   const nodeR = active ? 36 : 32;

//   return (
//     <motion.g
//       initial={{ scale: 0, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{
//         delay: 0.15 + index * 0.09,
//         type: "spring",
//         stiffness: 300,
//         damping: 22,
//       }}
//       style={{ transformOrigin: `${point.x}px ${point.y}px` }}
//       onMouseEnter={() => onHover(index)}
//       onMouseLeave={() => onHover(null)}
//       className="cursor-pointer"
//     >
//       {/* Outer glow ring */}
//       <motion.circle
//         cx={point.x}
//         cy={point.y}
//         r={42}
//         fill="none"
//         stroke="#34d399"
//         strokeWidth={1}
//         animate={{ opacity: active ? 0.6 : 0 }}
//         transition={{ duration: 0.2 }}
//       />
//       {/* Node bubble */}
//       <motion.circle
//         cx={point.x}
//         cy={point.y}
//         fill={active ? "#ecfdf5" : "white"}
//         stroke={active ? "#34d399" : "#e5e7eb"}
//         strokeWidth={1.5}
//         animate={{ r: nodeR }}
//         transition={{ type: "spring", stiffness: 400, damping: 25 }}
//         style={{
//           filter: active
//             ? "drop-shadow(0 6px 16px rgba(52,211,153,0.4))"
//             : "drop-shadow(0 2px 8px rgba(0,0,0,0.09))",
//         }}
//       />
//       {/* Emoji */}
//       <foreignObject
//         x={point.x - 18}
//         y={point.y - 18}
//         width={36}
//         height={36}
//         style={{ pointerEvents: "none" }}
//       >
//         <div className="w-full h-full flex items-center justify-center text-[22px] select-none">
//           {tool.icon}
//         </div>
//       </foreignObject>
//       {/* Label under node */}
//       <text
//         x={point.x}
//         y={point.y + nodeR + 18}
//         textAnchor="middle"
//         fontSize={11}
//         fontWeight={600}
//         letterSpacing={1.2}
//         fill={active ? "#059669" : "#9ca3af"}
//         style={{ textTransform: "uppercase", fontFamily: "inherit" }}
//       >
//         {tool.label}
//       </text>
//     </motion.g>
//   );
// }

// // ── Main ──────────────────────────────────────────────────────────────────────

// export const OrbitalTools = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const activeTool = activeIndex !== null ? tools[activeIndex] : null;

//   return (
//     // max-w contrôle la taille max, w-full le rend responsive
//     <div className="flex flex-col items-center gap-6 select-none w-full max-w-2xl mx-auto px-4">
//       <div className="w-full">
//         <svg
//           viewBox={`0 0 ${VB} ${VB}`}
//           width="100%"
//           className="overflow-visible"
//         >
//           <defs>
//             <radialGradient id="centreGlow" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.8" />
//               <stop offset="100%" stopColor="#d1fae5" stopOpacity="0" />
//             </radialGradient>
//           </defs>

//           {/* Background glow */}
//           <circle cx={C} cy={C} r={220} fill="url(#centreGlow)" />

//           {/* Hex outline */}
//           <polygon
//             points={points.map((p) => `${p.x},${p.y}`).join(" ")}
//             fill="none"
//             stroke="#bbf7d0"
//             strokeWidth={1}
//             strokeDasharray="5 8"
//           />

//           {/* Connectors */}
//           {points.map((p, i) => (
//             <ConnectorLine
//               key={i}
//               x={p.x}
//               y={p.y}
//               active={activeIndex === i}
//               index={i}
//             />
//           ))}

//           {/* Pulse dots */}
//           {points.map((p, i) => (
//             <PulseDot key={i} x={p.x} y={p.y} index={i} />
//           ))}

//           {/* Tool nodes */}
//           {tools.map((tool, i) => (
//             <ToolNode
//               key={tool.label}
//               tool={tool}
//               point={points[i]}
//               index={i}
//               active={activeIndex === i}
//               onHover={setActiveIndex}
//             />
//           ))}

//           {/* Centre logo */}
//           <foreignObject x={C - 52} y={C - 52} width={104} height={104}>
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 220,
//                 damping: 18,
//                 delay: 0.05,
//               }}
//               className="w-full h-full"
//             >
//               <div className="w-full h-full rounded-full bg-white border border-emerald-100 shadow-[0_6px_32px_rgba(52,211,153,0.22)] flex items-center justify-center overflow-hidden">
//                 <Image src={ColumnoC} height={80} width={80} alt="logo" />
//               </div>
//             </motion.div>
//           </foreignObject>
//         </svg>
//       </div>

//       {/* Tooltip card */}
//       <div className="h-16 flex items-center justify-center w-full">
//         <AnimatePresence mode="wait">
//           {activeTool ? (
//             <motion.div
//               key={activeTool.label}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -4 }}
//               transition={{ duration: 0.18 }}
//               className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-emerald-100 shadow-[0_4px_24px_rgba(52,211,153,0.15)]"
//             >
//               <span className="text-3xl">{activeTool.icon}</span>
//               <div>
//                 <p className="text-base font-semibold text-gray-800 leading-none">
//                   {activeTool.label}
//                 </p>
//                 <p className="text-sm text-gray-400 mt-1">{activeTool.desc}</p>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.p
//               key="hint"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="text-sm text-gray-300 tracking-wide"
//             >
//               {/* Survolez un outil */}
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ColumnoC from "@/public/columno-w-bg.png";

// ── Data ──────────────────────────────────────────────────────────────────────

const tools = [
  { icon: "📋", label: "Tasks", desc: "Gérez vos tâches" },
  { icon: "📊", label: "Analytics", desc: "Analysez vos données" },
  { icon: "📅", label: "Calendar", desc: "Planifiez votre temps" },
  { icon: "👥", label: "Team", desc: "Collaborez ensemble" },
  { icon: "🎯", label: "Goals", desc: "Atteignez vos cibles" },
  { icon: "⚡", label: "Sprints", desc: "Accélérez la cadence" },
];

// ── Hex geometry ──────────────────────────────────────────────────────────────
const VB = 600;
const C = VB / 2;
const R = 195;

function hexPoint(index: number) {
  const angle = (Math.PI / 3) * index - Math.PI / 6;
  return { x: C + R * Math.cos(angle), y: C + R * Math.sin(angle) };
}

const points = tools.map((_, i) => hexPoint(i));

// ── Sub-components ────────────────────────────────────────────────────────────

function ConnectorLine({
  x,
  y,
  active,
  index,
}: {
  x: number;
  y: number;
  active: boolean;
  index: number;
}) {
  return (
    <motion.line
      x1={C}
      y1={C}
      x2={x}
      y2={y}
      stroke={active ? "#34d399" : "#d1fae5"}
      strokeWidth={active ? 2 : 1}
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
    />
  );
}

function PulseDot({ x, y, index }: { x: number; y: number; index: number }) {
  return (
    <motion.circle
      r={3.5}
      fill="#34d399"
      animate={{
        cx: [C, x, C],
        cy: [C, y, C],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        delay: index * 0.6,
        ease: "easeInOut",
        repeatDelay: 1.0,
      }}
    />
  );
}

function ToolNode({
  tool,
  point,
  index,
  active,
  onHover,
}: {
  tool: (typeof tools)[0];
  point: { x: number; y: number };
  index: number;
  active: boolean;
  onHover: (i: number | null) => void;
}) {
  const nodeR = active ? 36 : 32;

  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.15 + index * 0.09,
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      style={{ transformOrigin: `${point.x}px ${point.y}px` }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="cursor-pointer"
    >
      {/* Outer glow ring */}
      <motion.circle
        cx={point.x}
        cy={point.y}
        r={42}
        fill="none"
        stroke="#34d399"
        strokeWidth={1}
        animate={{ opacity: active ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
      />
      {/* Node bubble */}
      <motion.circle
        cx={point.x}
        cy={point.y}
        fill={active ? "#ecfdf5" : "white"}
        stroke={active ? "#34d399" : "#e5e7eb"}
        strokeWidth={1.5}
        animate={{ r: nodeR }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          filter: active
            ? "drop-shadow(0 6px 16px rgba(52,211,153,0.4))"
            : "drop-shadow(0 2px 8px rgba(0,0,0,0.09))",
        }}
      />
      {/* Emoji */}
      <foreignObject
        x={point.x - 18}
        y={point.y - 18}
        width={36}
        height={36}
        style={{ pointerEvents: "none" }}
      >
        <div className="w-full h-full flex items-center justify-center text-[22px] select-none">
          {tool.icon}
        </div>
      </foreignObject>
      {/* Label under node */}
      <text
        x={point.x}
        y={point.y + nodeR + 18}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        letterSpacing={1.2}
        fill={active ? "#059669" : "#9ca3af"}
        style={{ textTransform: "uppercase", fontFamily: "inherit" }}
      >
        {tool.label}
      </text>
    </motion.g>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export const OrbitalTools = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeTool = activeIndex !== null ? tools[activeIndex] : null;

  return (
    <div className="flex flex-col items-center gap-6 select-none w-full max-w-2xl mx-auto px-4">
      <div className="w-full">
        <svg
          viewBox={`0 0 ${VB} ${VB}`}
          width="100%"
          className="overflow-visible"
        >
          <defs>
            <radialGradient id="centreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d1fae5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d1fae5" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background glow */}
          <circle cx={C} cy={C} r={220} fill="url(#centreGlow)" />

          {/* Hex outline */}
          <polygon
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="#bbf7d0"
            strokeWidth={1}
            strokeDasharray="5 8"
          />

          {/* Connectors */}
          {points.map((p, i) => (
            <ConnectorLine
              key={i}
              x={p.x}
              y={p.y}
              active={activeIndex === i}
              index={i}
            />
          ))}

          {/* Pulse dots */}
          {points.map((p, i) => (
            <PulseDot key={i} x={p.x} y={p.y} index={i} />
          ))}

          {/* Tool nodes */}
          {tools.map((tool, i) => (
            <ToolNode
              key={tool.label}
              tool={tool}
              point={points[i]}
              index={i}
              active={activeIndex === i}
              onHover={setActiveIndex}
            />
          ))}

          {/* Centre — logo ou tooltip selon survol */}
          <foreignObject x={C - 52} y={C - 52} width={104} height={104}>
            <AnimatePresence mode="wait">
              {activeTool ? (
                /* ── Tooltip centré ── */
                <motion.div
                  key={activeTool.label}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 22,
                    duration: 0.18,
                  }}
                  className="w-full h-full rounded-full bg-emerald-50 border border-emerald-200 shadow-[0_6px_32px_rgba(52,211,153,0.30)] flex flex-col items-center justify-center overflow-hidden gap-0.5 px-1"
                >
                  <span className="text-2xl leading-none">
                    {activeTool.icon}
                  </span>
                  <p className="text-[10px] font-bold text-emerald-700 leading-tight text-center uppercase tracking-wide mt-0.5">
                    {activeTool.label}
                  </p>
                  <p className="text-[8.5px] text-emerald-500 leading-tight text-center px-1">
                    {activeTool.desc}
                  </p>
                </motion.div>
              ) : (
                /* ── Logo par défaut ── */
                <motion.div
                  key="logo"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 22,
                    duration: 0.18,
                  }}
                  className="w-full h-full rounded-full bg-white border border-emerald-100 shadow-[0_6px_32px_rgba(52,211,153,0.22)] flex items-center justify-center overflow-hidden"
                >
                  <Image src={ColumnoC} height={80} width={80} alt="logo" />
                </motion.div>
              )}
            </AnimatePresence>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
