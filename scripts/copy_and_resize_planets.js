// Script para copiar y reducir imágenes de planets a planets-share
// Requiere: npm install sharp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '../src/assets/planets');
const destDir = path.join(__dirname, '../public/planets-share');
const maxSize = 800; // px lado mayor

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  sharp(srcPath)
    .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
    .toFile(destPath)
    .then(() => console.log(`Procesada: ${file}`))
    .catch(err => console.error(`Error con ${file}:`, err));
});

console.log('Procesando imágenes...');
