const fs = require("fs");
const path = require("path");
const https = require("https");

const images = [
  {
    url: "https://i.ibb.co/fz0rPJfd/TC.png",
    filename: "training-camp.png",
  },
  {
    url: "https://i.ibb.co/RkpzNxnj/AYNI.png",
    filename: "project-ayni.png",
  },
  {
    url: "https://i.ibb.co/ccr96WqW/imagen-2026-03-20-203500911.png",
    filename: "educheck.png",
  },
  {
    url: "https://i.ibb.co/9HmWtwgM/imagen-2026-03-20-204254229.png",
    filename: "stem-mentor.png",
  },
];

const targetDir = path.join(__dirname, "public", "images", "education");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(filepath);
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`Downloaded: ${path.basename(filepath)}`);
            resolve();
          });
        } else {
          reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        }
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {}); // Delete the file async. (But we don't check the result)
        reject(err);
      });
  });
};

const main = async () => {
  try {
    for (const img of images) {
      const filepath = path.join(targetDir, img.filename);
      await downloadImage(img.url, filepath);
    }
    console.log("All images downloaded successfully.");
  } catch (error) {
    console.error("Error downloading images:", error);
  }
};

main();
