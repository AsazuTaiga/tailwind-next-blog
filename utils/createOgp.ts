import path from 'path'
import { createCanvas, loadImage } from 'canvas'

const baseImagePath = path.resolve('./public', 'OGP_back.png')

// 参考：https://blog.ojisan.io/dynamic-ogp
export const createOgp = async (
  title: string,
  emoji: string,
): Promise<Buffer> => {
  const W = 1200
  const H = 630

  const canvas = createCanvas(W, H)
  const context = canvas.getContext('2d')

  const baseImage = await loadImage(baseImagePath)

  context.drawImage(baseImage, 0, 0, W, H)
  context.fillText(emoji, 200, 200, 200)
  context.fillText(title, 500, 200, 800)

  return canvas.toBuffer()
}
