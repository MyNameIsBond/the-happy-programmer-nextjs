import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import remarkToc from 'remark-toc'

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}
