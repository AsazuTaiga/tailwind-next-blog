import { NextApiHandler } from 'next'
import { createOgp } from '../../utils/createOgp'

const handler: NextApiHandler<OgpApiReponse | OgpApiError> = async (
  req,
  res,
) => {
  if (!req.body.title || !req.body.emoji) {
    res.status(400).json({ message: 'error' })
    return
  }

  const title: string = req.body.title
  const emoji: string = req.body.emoji
  const buffer = await createOgp(title, emoji)

  res.status(200).json({ binary: buffer })
  return
}

export default handler
