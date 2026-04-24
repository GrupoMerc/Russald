/**
 * Image optimization pipeline for Figma exports.
 *
 * Usage:
 *   npm run img
 *
 * Drop raw exports from Figma into public/photos/raw/
 * This script converts them to WebP, resizes to max 1440px width,
 * and outputs to public/photos/ — only those files get committed.
 */

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT    = fileURLToPath(new URL('..', import.meta.url))
const RAW_DIR = join(ROOT, 'public', 'photos', 'raw')
const OUT_DIR = join(ROOT, 'public', 'photos')

// Max width per filename prefix — add entries as needed
const MAX_WIDTH = {
  hero:      1440,
  og:        1200,
  procedure:  900,
  doctor:     800,
  default:   1200,
}

function maxWidth(name) {
  for (const [prefix, w] of Object.entries(MAX_WIDTH)) {
    if (prefix !== 'default' && name.startsWith(prefix)) return w
  }
  return MAX_WIDTH.default
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`
}

async function run() {
  let files
  try {
    files = await readdir(RAW_DIR)
  } catch {
    console.error(`❌  Raw folder not found: ${RAW_DIR}`)
    console.error('   Create public/photos/raw/ and drop your Figma exports there.')
    process.exit(1)
  }

  const images = files.filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f))

  if (images.length === 0) {
    console.log('No images found in public/photos/raw/ — nothing to do.')
    return
  }

  console.log(`\nOptimizing ${images.length} image(s)...\n`)

  for (const file of images) {
    const { name } = parse(file)
    const inPath   = join(RAW_DIR, file)
    const outPath  = join(OUT_DIR, `${name}.webp`)

    const inSize  = (await stat(inPath)).size
    await sharp(inPath)
      .resize({ width: maxWidth(name), withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath)
    const outSize = (await stat(outPath)).size
    const saved   = Math.round((1 - outSize / inSize) * 100)

    console.log(`  ✓  ${name}.webp   ${kb(inSize)} → ${kb(outSize)}  (${saved}% smaller)`)
  }

  console.log('\nDone. Commit the files in public/photos/ — raw/ stays gitignored.\n')
}

run()
