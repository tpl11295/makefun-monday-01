import { mkdirSync, writeFileSync } from "node:fs";

// Monday, Reviewed in One Line entry — the funniest one-line review
// of Monday, under 200 characters, nothing else.
// Chosen line: Monday as an unwanted software update — nobody asked
// for it, it takes forever, everything breaks after. A review of the
// day itself, in the voice of a one-star app review.
const LINE =
  "Monday is the only day that feels like a software update: nobody asked for it, it takes forever, and everything breaks after.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
