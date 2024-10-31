import path from 'path';
import fs from 'fs';
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';

function getHtmlEntries() {
  const pagesDir = path.resolve(__dirname, "");
  const entries = {};

  // Read all files in the directory
  const files = fs.readdirSync(pagesDir);

  // Filter out HTML files
  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  // Create entries for each HTML file
  htmlFiles.forEach((file) => {
    const name = path.basename(file, ".html");
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}
const galleryImages = [
  { src: './images/gallery_1.jpg', alt: 'Image 1' },
  { src: './images/gallery_2.jpg', alt: 'Image 2' },
  { src: './images/gallery_3.jpg', alt: 'Image 3' },
  { src: './images/gallery_4.jpg', alt: 'Image 4' },
  { src: './images/gallery_5.jpg', alt: 'Image 5' },
  { src: './images/gallery_6.jpg', alt: 'Image 6' },
  { src: './images/gallery_7.jpg', alt: 'Image 7' },
  { src: './images/gallery_8.jpg', alt: 'Image 8' },
  { src: './images/gallery_9.jpg', alt: 'Image 9' },
  { src: './images/gallery_10.jpg', alt: 'Image 10' },
  { src: './images/gallery_11.jpg', alt: 'Image 11' },
  { src: './images/gallery_12.jpg', alt: 'Image 12' },
  { src: './images/gallery_13.jpg', alt: 'Image 13' },
  { src: './images/gallery_14.jpg', alt: 'Image 14' },
  { src: './images/gallery_15.jpg', alt: 'Image 15' },
  { src: './images/gallery_16.jpg', alt: 'Image 16' },
  { src: './images/gallery_17.jpg', alt: 'Image 17' },
  { src: './images/gallery_18.jpg', alt: 'Image 18' },
  { src: './images/gallery_19.jpg', alt: 'Image 19' },
  { src: './images/gallery_20.jpg', alt: 'Image 20' },
  { src: './images/gallery_21.jpg', alt: 'Image 21' },
  { src: './images/gallery_22.jpg', alt: 'Image 22' },
  { src: './images/gallery_23.jpg', alt: 'Image 23' },
  { src: './images/gallery_24.jpg', alt: 'Image 24' },
  { src: './images/gallery_25.jpg', alt: 'Image 25' },
  { src: './images/gallery_26.jpg', alt: 'Image 26' },
  { src: './images/gallery_27.jpg', alt: 'Image 27' },
  { src: './images/gallery_28.jpg', alt: 'Image 28' },
  { src: './images/gallery_29.jpg', alt: 'Image 29' },
  { src: './images/gallery_30.jpg', alt: 'Image 30' },
  { src: './images/gallery_31.jpg', alt: 'Image 31' },
  { src: './images/gallery_32.jpg', alt: 'Image 32' },
  { src: './images/gallery_33.jpg', alt: 'Image 33' }
];

const mobilneImages=[
  { src: './images/mobilne-image1.jpg', alt: 'Image 1' },
  { src: './images/mobilne-image2.jpg', alt: 'Image 2' },
  { src: './images/mobilne-image3.jpg', alt: 'Image 3' },
  { src: './images/mobilne-image4.jpg', alt: 'Image 4' },
  { src: './images/mobilne-image5.jpg', alt: 'Image 5' },
  { src: './images/mobilne-image6.jpg', alt: 'Image 6' },
]

export default defineConfig({
  base: '/drabina/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: { galleryImages, mobilneImages } 
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }},
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
