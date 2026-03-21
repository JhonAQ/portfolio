const fs = require("fs");
const path = require("path");
const https = require("https");

const ICONS_DIR = path.join(__dirname, "public", "icons");

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

const iconsToDownload = {
  // Programming Languages
  javascript: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/javascript.svg",
  },
  typescript: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/typescript.svg",
  },
  python: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/python.svg",
  },
  java: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    dark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", // Fallback as no dark was specified in skills
  },
  cplusplus: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/cplusplus.svg",
  },
  csharp: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/csharp.svg",
  },
  sql: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/mysql.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/mysql.svg",
  },
  perl: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/perl/perl-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/perl.svg",
  },
  shell: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/gnubash.svg",
  },
  php: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/php.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/php.svg",
  },

  // Frontend & Mobile
  react: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/react.svg",
  },
  nextjs: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nextdotjs.svg",
  },
  reactnative: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/react.svg",
  },
  html5: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/html5.svg",
  },
  css3: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/css3.svg",
  },
  tailwind: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tailwindcss.svg",
  },
  sass: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/sass.svg",
  },
  flutter: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/flutter.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/flutter.svg",
  },
  expo: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/expo.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/expo.svg",
  },

  // Backend & Databases
  nodejs: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nodedotjs.svg",
  },
  nestjs: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/nestjs.svg",
  },
  django: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/django.svg",
  },
  postgresql: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postgresql.svg",
  },
  supabase: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/supabase.svg",
  },
  laravel: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/laravel.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/laravel.svg",
  },

  // Tools & OS
  git: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/git.svg",
  },
  docker: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/docker.svg",
  },
  npm: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/npm.svg",
  },
  postman: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postman.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/postman.svg",
  },
  ubuntu: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/ubuntu.svg",
  },
  archlinux: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/archlinux/archlinux-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/archlinux.svg",
  },
  neovim: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/neovim/neovim-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/neovim.svg",
  },
  vim: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/vim.svg",
  },

  // Design & Others
  figma: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/figma.svg",
  },
  illustrator: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobeillustrator.svg",
  },
  affinity: {
    light:
      "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/affinitydesigner.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/affinitydesigner.svg",
  },
  premiere: {
    light:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-plain.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobepremierepro.svg",
  },
  latex: {
    light: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/latex.svg",
    dark: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/latex.svg",
  },
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(`Failed to download ${url}: ${response.statusCode}`),
          );
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
};

const main = async () => {
  console.log("Starting icon downloads...");

  for (const [name, variants] of Object.entries(iconsToDownload)) {
    // Download light version
    const lightPath = path.join(ICONS_DIR, `${name}-original.svg`);
    // If light and dark are same, we just need one file, but to map easily we might duplicate or handle in code.
    // Let's download both to keep filenames consistent with the variants.
    try {
      console.log(`Downloading ${name} (light)...`);
      await downloadFile(variants.light, lightPath);
    } catch (e) {
      console.error(`Error downloading ${name} light: ${e.message}`);
    }

    // Download dark version
    const darkPath = path.join(ICONS_DIR, `${name}-dark.svg`);
    if (variants.dark) {
      try {
        console.log(`Downloading ${name} (dark)...`);
        await downloadFile(variants.dark, darkPath);
      } catch (e) {
        console.error(`Error downloading ${name} dark: ${e.message}`);
      }
    }
  }

  console.log("All icons downloaded to public/icons/");
};

main();
