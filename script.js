const fs = require("fs");
let content = fs.readFileSync("app/page.tsx", "utf8");

const reps = [
  ["bg-[#111827]", "bg-white dark:bg-[#111827]"],
  ["bg-[#0A0F1C]", "bg-slate-50 dark:bg-[#0A0F1C]"],
  ["text-white", "text-slate-900 dark:text-white"],
  ["text-slate-400", "text-slate-600 dark:text-slate-400"],
  ["text-slate-300", "text-slate-700 dark:text-slate-300"],
  ["text-slate-500", "text-slate-500 dark:text-slate-400"],
  ["border-white/5", "border-slate-200 dark:border-white/5"],
  ["border-white/10", "border-slate-300 dark:border-white/10"],
  ["border-white/20", "border-slate-300 dark:border-white/20"],
  ["bg-white/5", "bg-slate-100 dark:bg-white/5"],
  ["bg-white/10", "bg-slate-200 dark:bg-white/10"],
];

reps.forEach(([oldStr, newStr]) => {
  content = content.replaceAll(oldStr, newStr);
});

// Since we did multiple passes earlier manually, we might have nested pairs now.
// We clean them up:
const cleanups = [
  [
    "text-slate-900 dark:text-slate-900 dark:text-white",
    "text-slate-900 dark:text-white",
  ],
  ["bg-white dark:bg-white dark:bg-[#111827]", "bg-white dark:bg-[#111827]"],
  [
    "bg-slate-50 dark:bg-slate-50 dark:bg-[#0A0F1C]",
    "bg-slate-50 dark:bg-[#0A0F1C]",
  ],
  [
    "text-slate-600 dark:text-slate-600 dark:text-slate-400",
    "text-slate-600 dark:text-slate-400",
  ],
  [
    "text-slate-700 dark:text-slate-700 dark:text-slate-300",
    "text-slate-700 dark:text-slate-300",
  ],
  [
    "border-slate-200 dark:border-slate-200 dark:border-white/5",
    "border-slate-200 dark:border-white/5",
  ],
  [
    "border-slate-300 dark:border-slate-300 dark:border-white/10",
    "border-slate-300 dark:border-white/10",
  ],
  [
    "bg-slate-100 dark:bg-slate-100 dark:bg-white/5",
    "bg-slate-100 dark:bg-white/5",
  ],
];

cleanups.forEach(([oldStr, newStr]) => {
  content = content.replaceAll(oldStr, newStr);
});

fs.writeFileSync("app/page.tsx", content, "utf8");
