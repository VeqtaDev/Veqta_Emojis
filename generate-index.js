const fs = require("fs");
const path = require("path");

const emojiDir = path.join(__dirname, "emojis");
const files = fs.readdirSync(emojiDir).filter(file =>
  [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(path.extname(file).toLowerCase())
);

fs.writeFileSync(
  path.join(emojiDir, "index.json"),
  JSON.stringify(files, null, 2)
);

console.log("✅ index.json généré avec", files.length, "emojis");
