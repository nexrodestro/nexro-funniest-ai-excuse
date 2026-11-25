import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I followed the tutorial exactly. Wrong app, wrong language, 2014.";

// Fallbacks (measured, next-best lanes — not submitted; full text in candidates.md):
// v2 cookies (64 chars, 23/25), v3 snooze (80 chars, 23/25),
// v4 tutorial-step-one (71 chars, 23/25). Gate: single line, ≤200 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE !== LINE.trim()) {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
