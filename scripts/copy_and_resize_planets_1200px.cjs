// Script para copiar y reducir imágenes de planets a planets-share (1200px, calidad 80%)
// Requiere: npm install sharp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '../src/assets/planets');
const destDirs = [
  path.join(__dirname, '../public/planets-share'),
  path.join(__dirname, '../src/assets/planets-share'),
];
const maxSize = 1200; // px lado mayor
const quality = 80;

for (const destDir of destDirs) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
}

function writeOptimizedImage(srcPath, destPath, ext) {
  const pipeline = sharp(srcPath).resize({
    width: maxSize,
    height: maxSize,
    fit: 'inside',
    withoutEnlargement: true,
  });

  if (ext === '.png') {
    return pipeline.png({ compressionLevel: 9 });
  }

  return pipeline.jpeg({ quality, mozjpeg: true });
}

fs.readdirSync(srcDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const srcPath = path.join(srcDir, file);
  Promise.all(
    destDirs.map(destDir => {
      const destPath = path.join(destDir, file);
      return writeOptimizedImage(srcPath, destPath, ext).toFile(destPath);
    })
  )
    .then(() => console.log(`Procesada: ${file}`))
    .catch(err => console.error(`Error con ${file}:`, err));
});

console.log('Procesando imágenes a 1200px y calidad 80%...');
