---
title: 'Prism with Next.js'
description: 'Example using Prism / Markdown with Next.js including switching syntax highlighting themes.'
---

# Using Prism with Next.js

[**Prism**](https://prismjs.com/) is a popular syntax highlighter commonly used with Markdown.
This example shows how to use Prism with [**Next.js**](https://nextjs.org/). Use the theme dropdown
in the header to switch syntax highlighting themes.

Next.js uses `getStaticPaths`/`getStaticProps` to generate [static pages](https://nextjs.org/docs/basic-features/data-fetching). These functions are _not_ bundled client-side, so you can **write server-side code directly**. For example, you can read Markdown files from the filesystem (`fs`) – including parsing front matter with [gray-matter](https://github.com/jonschlinkert/gray-matter). For example, let's assume you have a Markdown file located at `docs/my-post.js`.

We can retrieve that file's contents using `getDocBySlug('my-post')`.

```js
// lib/docs.js

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'docs')

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}
```

Then, we can **transform** the raw Markdown into HTML using [remark](https://github.com/remarkjs/remark) plugins.

```js
// lib/markdown.js

import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}
```

Passing the `content` returned by `getDocBySlug('my-post')` into `markdownToHtml(content)`
would convert a Markdown file like this:

````markdown
---
title: 'My First Post'
description: 'My very first blog post'
---

# My First Post

I **love** using [Next.js](https://nextjs.org/)

```js
const doc = getDocBySlug(params.slug)
```
````

into this HTML, which includes the proper elements and class names.

```swift
//  BlurryViewApp.swift
//  Shared
//  Created by Tony Hajdini on 20/01/2021.

import SwiftUI

@main
struct BlurryViewApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
struct Card: View {
    var body: some View {
        VStack(alignment:.leading, spacing: 0) {
            HStack{
                Image(systemName: "applelogo").font(.largeTitle)
                Text("Apple Card")
            }.padding(20).lineSpacing(2).padding(.bottom)
            Text("5612 2536 1245 5698")
                .fontWeight(.medium)
                .tracking(4)
                .padding([.top,.leading])
            HStack {
                Text("1234").font(.caption).fontWeight(.light)
                Spacer()
                VStack {
                    Text("VALID").fontWeight(.thin).font(.system(size: 8))
                    Text("THRU").fontWeight(.thin).font(.system(size: 8))
                }
                Text("12/21")
                Spacer()
            }.padding(.leading).padding([.top, .bottom], 10)
            Text("Mr Tony").tracking(0.5).padding(.leading).padding(.bottom, 25)
        }
        .background(BlurView(style: .regular))
        .cornerRadius(20)
        .shadow(radius: 5)
        .padding()
    }
}
```