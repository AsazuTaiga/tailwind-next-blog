---
emoji: "ð¦"
title: "Next.jsã§ä»»æã®ãã¡ã¤ã«ä¿å­æã«ããããªã­ã¼ã"
createdAt: "2021/08/07"
updatedAt: "2021/08/07"
published: true
genre: "tech"
tags: ["Next.js"]
---

ã­ã¼ã«ã«ã®markdownãã¡ã¤ã«ãSSGããå½¢ã§ãã­ã°ãæ¸ãã¦ããã¨ããããªãã¨ãæãã¾ããããmdãã¡ã¤ã«ãæ´æ°ãããç»é¢ããªã­ã¼ãããã¦ã»ãããªï½ãã¨ãæ¸ãã®ãæ¥½ã«ãªããã¨ã¯ããã­ã°ãç¶ããç§è¨£ããã§ããã

èª¿ã¹ã¦ã¿ããã`next-remote-watch`ã¨ããã©ã¤ãã©ãªãä½¿ç¨ãããã¨ã§ç°¡åã«å®ç¾ã§ããã®ã§ãç´¹ä»ãã¾ãã

[hashicorp/next-remote-watch: Decorated local server for next.js that enables reloads from remote data changes](https://github.com/hashicorp/next-remote-watch)

ä»ã®ã¨ããmarkdownãã¡ã¤ã«ã®å¤æ´æ¤ç¥ä»¥å¤ã®ä½¿ãéãæãã¤ãã¦ãã¾ããããNext.jsãããã©ã«ãã§ããããªã­ã¼ããã¦ãããjs/ts/cssç­ä»¥å¤ã®ãã¡ã¤ã«ãã¼ã¹ã§ããããªã­ã¼ãããããã¨ãã«ã¯ãå½¹ã«ç«ã¤ããããã¾ããã

# ç°å¢

```json
{
  "name": "tailwind-headlessui-next-blog",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@headlessui/react": "^1.4.0",
    "axios": "^0.21.1",
    "dayjs": "^1.10.6",
    "markdown-yaml-metadata-parser": "^3.0.0",
    "next": "11.0.1",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-markdown": "^6.0.3",
    "react-syntax-highlighter": "^15.4.4",
    "remark-gfm": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "17.0.15",
    "@types/react-syntax-highlighter": "^13.5.2",
    "autoprefixer": "^10.3.1",
    "next-remote-watch": "^1.0.0",
    "postcss": "^8.3.6",
    "tailwindcss": "^2.2.7",
    "typescript": "4.3.5"
  }
}
```

# å°å¥

## ããã±ã¼ã¸ã¤ã³ã¹ãã¼ã«

```json
npm i -D next-remote-watch
```

## `next dev`ã³ãã³ããç½®ãæãã

```json
   "scripts": {
 -   "dev": "next dev",
 +   "dev": "next-remote-watch md"
```

`md`ã®é¨åã¯ãæ¤ç¥ã®å¯¾è±¡ã«ããããã£ã¬ã¯ããª or ãã¡ã¤ã«ãæå®ãã¦ä¸ããã
ããã§å°å¥ã¯ãã£ããå®äºãå¾ã¯ãã¤ãéã`npm run dev`ãã¦è¨äºãæ¸ããªãããã©ã¦ã¶ã§ãã¬ãã¥ã¼ãã¦ãã°ããã§ãã

---

# ä½è«

## åé¨çã«ã¯`chokidar`ãä½¿ã£ã¦ãã£ã½ã

`chokidar`ã¯ããã¡ã¤ã«ã®å¤æ´ãç£è¦ããNode.jsã©ã¤ãã©ãªã§ãã

ä»¥ä¸ã®ç®æã§ã`chokidar`ã«ãããã¡ã¤ã«ç£è¦ã¨ãã¤ãã³ãé§åã§ã®ããããªã­ã¼ãã®çºç«ããã£ããã¤ãããæ°ããã¾ãã­ã

[next-remote-watch/next-remote-watch at 6767289c23368ce5d604bd6c60aa0deb63588403 Â· hashicorp/next-remote-watch](https://github.com/hashicorp/next-remote-watch/blob/6767289c23368ce5d604bd6c60aa0deb63588403/bin/next-remote-watch#L44)

```ts
app.prepare().then(() => {
  // if directories are provided, watch them for changes and trigger reload
  if (program.args.length > 0) {
    chokidar
      .watch(program.args, { usePolling: Boolean(program.polling) })
      .on(
        program.event,
        async (filePathContext, eventContext = defaultWatchEvent) => {
          app.server.hotReloader.send('building')
          // ä¸­ç¥ by @asazutaiga
          app.server.hotReloader.send('reloadPage')
        }
      )
  }
  // ä»¥ä¸ç¥ by @asazutaiga
```

ãã®å ´åã¯ãNext.jsã®ã¢ããªã±ã¼ã·ã§ã³å¨ä½ãåãã«ããã¦ããã¿ããã§ãã­ã

## `zenn-editor`ã®ãã¬ãã¥ã¼ã£ã¦çéã ããªããéãã®ããªï¼âwebsocketã ã£ã

`zenn-editor`ã®mdä¿å­æã®ãã¬ãã¥ã¼åæ ããã£ã¡ãéãã¦å¿å°ããã¨å¸¸ãæã£ã¦ãã¾ãããã`next-remote-watch`ããã³è¼ããã¦ã¢ããªå¨ä½ãåãã«ããã¦ããå ´åã¨æ¯è¼ãã¦ã¿ãã¨ä¸ç®ç­ç¶ã§ããã
ã©ãããããã¡ãã`chokidar`ã§ãã¡ã¤ã«ç£è¦ããã¤ã¤ãå¤æ´ããã£ãå ´åã«ã¯Next.jsã®åãã«ããèµ°ãããã®ã§ã¯ãªãã`socket.io`ãä½¿ã£ã¦websocketçµç±ã§å¤æ´åæ ãã¦ããããã§ãããããéãããã ï¼ãªã£ã¨ãã

[zenn-editor/index.ts at 7711dac082923a409713d1f17514949f3f8bfa31 Â· zenn-dev/zenn-editor](https://github.com/zenn-dev/zenn-editor/blob/7711dac082923a409713d1f17514949f3f8bfa31/packages/zenn-cli/cli/preview/index.ts#L54)

```ts
  if (shouldWatch) {
    const watcher = chokidar.watch(`${process.cwd()}/{articles,books}/**/*`);
    const io = new Server(server);
    watcher.on('change', () => {
      io.emit('reload');
    });

    process.on('SIGINT', function () {
      // `Ctrl-C`ã® signalãå¥ªã£ã¦æ­£å¸¸çµäºããã.
      io.close();
      watcher.close();
      process.exit();
    });
  }
  if (shouldOpen) open(previewUrl);
};
```

## ããããªã­ã¼ãã£ã¦ããããã­

ãã¯ãWebãã­ã³ãã¨ã³ãã®éçºã§ã¯å½ããåã«ãªã£ã¦ããããããªã­ã¼ããã¨ããããHMRããFast Refreshã®ç»å ´ã§ãããæç´ããããããªæ°ãããããããªã­ã¼ãã

jQueryãCDNããèª­ã¿è¾¼ãã§HTMLãç´æ¥æä½ãã¦ããå³ãå·¦ãããããªããã­ã³ãè¿·å­ã®ããï¼ã¨ãã£ã¦ã1å¹´ååãããï¼ã¯ããããããªã­ã¼ãã£ã¦ã¹ã²ã¼ï¼ãã¨ããæåãããã¾ãããã ã£ã¦ãã¨ãã£ã¿ã§ãã¡ã¤ã«ãä¿å­ããå¾ã«ããããããã©ã¦ã¶ã®æ´æ°ãã¿ã³æ¼ããªãã¦ãããã§ããï¼

ç§ãããããªã­ã¼ãã«æåã«è§¦ããã®ã¯ãVSCodeã®[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)ã¨ããæ¡å¼µæ©è½ã§ããç´ ã®HTMLï¼JSãjQueryã§ä½ãããLPãã¡ãã£ã¨è§¦ãã¨ãã¨ãã«ãããã¨ä¾¿å©ã§ãã

ããã«ãåãä½èã®[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)ãçµã¿åããã¦ãããæãã«ä½æ¥­ãã§ããæãåºã

ï¼â¦â¦ã¾ããåè·ã§æå¾ã«ããjQueryè£½Webã¢ããªã®ç¾å ´ã¯ãèªè¨¼ã®é¢ä¿ã§APIãããã¼ã¿ãåã£ã¦ããææ®µããªãã®ã§ã­ã¼ã«ã«ãµã¼ãã§ã®ä½æ¥­ãã§ããããã¡ãã¡éçºç¨ã®ãµã¼ãã®ãã£ã¬ã¯ããªãä½ã£ã¦ã¯æåã¢ããã­ã¼ãããå¿è¦ãããã¨ãããæ¿ã¤ãç°å¢ã ã£ããã§ãããï¼

# Reactéçºç°å¢ã«ãããããããªã­ã¼ãï¼ããã³é¡ä¼¼æ©è½ï¼ã«ãããããªã³ã¯é

3é£ä¼ã ããèª­ããã

## Hot Module Replacement (Webpack)

[Hot Module Replacement | webpack](https://webpack.js.org/concepts/hot-module-replacement/)

## React Refresh

ãã­ã¥ã¡ã³ãè¦å½ããããFast Refreshã«ã¤ãã¦ã®Danåçã®Issueã³ã¡ã³ãã®ãªã³ã¯ã[npmã®react-refreshã®ãã¼ã¸](https://www.npmjs.com/package/react-refresh)ã«è²¼ããã¦ãã

["How should we set up apps for HMR now that Fast Refresh replaces react-hot-loader? Â· Issue #16604 Â· facebook/react #issuecomment-528663101](https://github.com/facebook/react/issues/16604#issuecomment-528663101)


## Fast Refreshï¼Next.jsï¼

[Basic Features: Fast Refresh | Next.js](https://nextjs.org/docs/basic-features/fast-refresh)



