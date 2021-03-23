// @deno-types="https://deno.land/x/pagic@v0.9.1/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1'

export default {
  srcDir: 'site',
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: 'Deno Algorithm',
  description: 'Deno Algorithm, learn Algorithms in Deno and TypeScript',
  github: 'https://github.com/hylerrix/deno-algorithm',
  head: (<link rel="icon" type="image/png" href="/favicon.png" />),
  nav: [
    { text: 'Articles', link: '/articles/' },
    {
      text: 'Coffee!!',
      link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
      target: '_blank',
      popover: (
        <>
          <img src="http://qiniu.ningo.cloud/hylerrix/reward-alipay.png" width="256" style={{ marginRight: '1rem', verticalAlign: 'top' }} />
          <img src="http://qiniu.ningo.cloud/hylerrix/reward-wechat.png" width="256" style={{ verticalAlign: 'top' }} />
        </>
      )
    },
    { text: 'Deno Tutorial', target: '_blank', link: 'https://github.com/hylerrix/deno-tutorial' },
    { text: 'React Fullstack Handbook', target: '_blank', link: 'https://github.com/hylerrix/fullstack-react-handbook' },
    { text: 'TBD...', target: '_blank', link: 'https://github.com/hylerrix' },
    {
      text: 'NingoWood',
      link: 'https://github.com/ningowood',
      target: '_blank',
      popover: (
        <img src="http://qiniu.ningo.cloud/ningo/official-qrcode.png" width="256" style={{ verticalAlign: 'top' }} />
      )
    },
    { text: 'About', target: '_blank', link: 'https://github.com/hylerrix' },
  ],
  sidebar: {
    '/articles/': [
      'articles/README.md',
      // 'articles/THANKS.md',
    ],
  },
  tools: {
    editOnGithub: true,
    backToTop: true
  },
  port: 8011
}
