// Fridge Roast: one line roasting a smart fridge.
// The roast is the entry — this runner writes it to entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const roast =
  "Your smart fridge has Wi-Fi, a touchscreen and a camera, " +
  "yet it still lets the milk expire while texting you about ice cream at 2 a.m.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), roast + "\n", "utf8");
console.log(roast);
// Roast length: 134 code points (limit 200).
