import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Monday, Reviewed in One Line".
// The funniest one-line review of Monday, under 200 characters,
// nothing else. Monday as an unwanted software update — nobody
// asked for it, it takes forever, everything breaks after. A review
// of the day itself, in the voice of a one-star app review — and
// the update cannot be postponed.
const MAX_CHARS = 200;
const MESSAGE =
  "Monday is the only day that feels like a software update: nobody asked for it, it takes forever, and everything breaks after.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
