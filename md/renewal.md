---
emoji: "ð"
title: "ãã­ã°ããªãã¥ã¼ã¢ã«ãã¾ãã"
createdAt: "2021/07/31"
updatedAt: "2021/07/31"
published: true
genre: "tech"
tags: ["blog"]
---

# ãã­ã°ãä½ãã¾ããï¼Nåç®ï¼

é©å½ãªæè¡ãè©¦ããããSSGããã®ã«ãã­ã°ã¨ããã³ã³ãã³ãã¯ç¡è¶è¦è¶åãã¦ããæ°ããã¾ãã
ãªã®ã§ãä½åããã­ã°ãä½ã£ã¦ãã¾ãã®ã§ããã­ãè¨±ãã¦ããã

## ä½¿ã£ã¦ããæè¡

Next.js + TypeScriptæ§æã¯ãã¤ãã®æãã§ãããtailwindcssãä½¿ã£ã¦ã¾ãã

tailwindcssã¯gradientãç°¡åã«ä½ããã®ãé­åã®ä¸ã¤ã§ãããä»åã¯ãããããã©ãããªãã¶ã¤ã³ã«ãããã£ãã®ã§gradientã¯ä½¿ã£ã¦ãã¾ãããæ®å¿µã
ãã ããã£ã±ãã¦ã¼ãã£ãªãã£ã®çµã¿åããã§ãã¶ã¤ã³ãã¼ã¿ã«ããç¨åº¦è¿ããã®ãä½ããã®ã¯ä¾¿å©ã
tailwind.config.jsããã¾ãä½¿ãã°ãããã ãã§tailwindãåå°ã«ãã¶ã¤ã³ã·ã¹ãã çãªãã®ãä½ããã£ã½ãã®ã§ãããã§ããã­ã

ã³ã³ãã³ãã«ã¤ãã¦ã¯ãCMSã¯ä½¿ããããªãã¸ããªåã«ãã®ã¾ã¾mdãã¡ã¤ã«ãç½®ãã¦ãã«ãæã«SSGãã¦ã¾ãã
ããããæ§æèãã¾ããããçµå±ãããä¸çªã·ã³ãã«ã§ããã§ãã­ã

ã³ã¼ããã­ãã¯ã®ã·ã³ã¿ãã¯ã¹ãã¤ã©ã¤ãã¯ã¾ã å¥ãã¦ãªãã®ã§ããã®ãã¡å¥ãã¾ãã

markdownã®metaã®é¨åã«ãçµµæå­ãã¿ã¤ãã«ãä½ææ¥ãå¥ãã¦ããã®ã§ããããããå¤æããããã«[markdown-yaml-metadata-parser](https://github.com/ilterra/markdown-yaml-metadata-parser)ã¨ããã©ã¤ãã©ãªãä½¿ããã¦ããã£ã¦ã¾ãããããã ãªæ©è½ãæä¾ããã¦ãã¦ã¨ã¦ãããã®ã§ãããåæå ±ããªãã®ã§ãd.tsãèªåã§æ¸ãã¾ããã[ãã®ãã­ã°ã®ãªãã¸ããª](https://github.com/AsazuTaiga/tailwind-next-blog)ã®ä¸­ã«ç½®ãã¦ããã®ã§ãã©ãããªã@typesã¨ãã«PRéã£ã¦ã¿ããããªâ¦â¦ã¨æãã¤ã¤çµæ§ããã©ãããããªã®ã§äºã®è¶³ãè¸ãã§ã¾ãð¢

ï¼ä½ãä»ã«æ¸ãã¹ããã¨æãåºãããè¿½è¨ãã¾ãï¼

# è¿½è¨

ã·ã³ã¿ãã¯ã¹ãã¤ã©ã¤ãã§ããããã«ãã¾ããã
markdownã®ã¬ã³ããªã³ã°ã¯[react-markdwon](https://github.com/remarkjs/react-markdown)ãä½¿ã£ã¦ãã¦ãããã«[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)ãçµã¿åããã¦ã¾ãã

ã»ã¼å¬å¼ã§ç´¹ä»ããã¦ãããæ¹ãã®ã¾ã¾ã§ãããåæ¥­æãããã¾ãã­ã

```tsx
// CodeBlock.tsx
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import { useTheme } from '../hooks/useTheme'

type Props = {
  language?: string
  value: string
}

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('json', json)

export const CodeBlock: React.VFC<Props> = ({ language, value }) => {
  const { theme } = useTheme()
  const style = theme === 'light' ? vs : vscDarkPlus
  return (
    <SyntaxHighlighter language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  )
}

```

```tsx
// [slug].tsx
// ããããçç¥
// ...
    <Markdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={children.toString().replace(/\n$/, '')}
            />
          ) : (
            <code className={className}>{children}</code>
          )
        },
      }}
    >
      {post.content}
    </Markdown>
// ...
```