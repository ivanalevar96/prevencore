import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFile } from 'node:fs/promises'

const SRC = 'scripts/source-assets/logo-source.png'
const NAVY = '#0B1F33'

async function main() {
  // Trim transparent margins so the shield fills its bounding box tightly
  const trimmed = sharp(SRC).trim()

  // 1) Header/footer logo: tall transparent PNG, generous resolution for retina
  await trimmed
    .clone()
    .resize({ height: 480 })
    .png({ compressionLevel: 9, palette: true })
    .toFile('public/assets/logo.png')

  // 2) Square icons on a solid navy canvas (keeps the shield legible at small sizes)
  // Done in two encode stages: chaining resize(contain) -> extend -> flatten in a single
  // pipeline leaves the pillarbox transparent instead of navy (sharp quirk), so the padded
  // buffer is fully encoded first, then re-read and flattened.
  const squareOnNavy = async (size, padding) => {
    const padded = await trimmed
      .clone()
      .resize({ width: size - padding * 2, height: size - padding * 2, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: NAVY,
      })
      .png()
      .toBuffer()

    return sharp(padded).flatten({ background: NAVY }).png()
  }

  await (await squareOnNavy(180, 18)).toFile('public/apple-touch-icon.png')
  await (await squareOnNavy(192, 18)).toFile('public/icon-192.png')
  await (await squareOnNavy(512, 48)).toFile('public/icon-512.png')

  // 3) favicon.ico (16/32/48), same navy-square treatment
  const faviconSizes = [16, 32, 48]
  const buffers = await Promise.all(
    faviconSizes.map(async (size) => (await squareOnNavy(size, Math.round(size * 0.08))).toBuffer())
  )
  const ico = await pngToIco(buffers)
  await writeFile('public/favicon.ico', ico)

  console.log('Icons generated successfully.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
