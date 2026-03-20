const fs = require("fs");
let content = fs.readFileSync("app/page.tsx", "utf8");

// Regex patterns to remove exact bad sequences
content = content.replace(
  /bg-slate-50 dark:bg-slate-50 dark:bg-\[\#0A0F1C\]/g,
  "bg-slate-50 dark:bg-[#0A0F1C]",
);
content = content.replace(
  /bg-white dark:bg-white dark:bg-\[\#111827\]/g,
  "bg-white dark:bg-[#111827]",
);
content = content.replace(
  /text-slate-900 dark:text-slate-900 dark:text-white/g,
  "text-slate-900 dark:text-white",
);
content = content.replace(
  /text-slate-700 dark:text-slate-700 dark:text-slate-300/g,
  "text-slate-700 dark:text-slate-300",
);
content = content.replace(
  /text-slate-600 dark:text-slate-600 dark:text-slate-400/g,
  "text-slate-600 dark:text-slate-400",
);
content = content.replace(
  /text-slate-500 dark:text-slate-500 dark:text-slate-400/g,
  "text-slate-500 dark:text-slate-400",
);
content = content.replace(
  /border-slate-200 dark:border-slate-200 dark:border-white\/5/g,
  "border-slate-200 dark:border-white/5",
);
content = content.replace(
  /border-slate-300 dark:border-slate-300 dark:border-white\/10/g,
  "border-slate-300 dark:border-white/10",
);
content = content.replace(
  /border-slate-300 dark:border-slate-300 dark:border-white\/20/g,
  "border-slate-300 dark:border-white/20",
);
content = content.replace(
  /bg-slate-100 dark:bg-slate-100 dark:bg-white\/5/g,
  "bg-slate-100 dark:bg-white/5",
);
content = content.replace(
  /bg-slate-200 dark:bg-slate-200 dark:bg-white\/10/g,
  "bg-slate-200 dark:bg-white/10",
);
content = content.replace(
  /border-indigo-200 dark:border-indigo-200 dark:border-indigo-500\/30/g,
  "border-indigo-200 dark:border-indigo-500/30",
);
content = content.replace(
  /bg-indigo-50 dark:bg-indigo-50 dark:bg-indigo-500\/10/g,
  "bg-indigo-50 dark:bg-indigo-500/10",
);
content = content.replace(
  /text-indigo-700 dark:text-indigo-700 dark:text-indigo-200/g,
  "text-indigo-700 dark:text-indigo-200",
);

// More generic cleanup for any `dark:xyz dark:xyz` where we want to keep only the second one.
// Let's just fix it manually where needed.

fs.writeFileSync("app/page.tsx", content, "utf8");
