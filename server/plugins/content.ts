import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      const textOnPage = toString(file.body)
      const readingTime = getReadingTime(textOnPage)
      file.readingTime = readingTime
    }
  })
})
