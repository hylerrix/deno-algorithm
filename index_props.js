import projectConfig from '/pagic.config.js';
import IndexPage from './index_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "index.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "",
    'content': React.createElement(IndexPage, { config: {
            branch: 'main',
            description: 'Deno Algorithm, learn Algorithms in Deno and TypeScript',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            github: 'https://github.com/hylerrix/deno-algorithm',
            head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
            include: undefined,
            nav: [
                {
                    link: '/articles/',
                    text: 'Articles'
                },
                {
                    link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-alipay.png", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" }),
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-wechat.png", style: { verticalAlign: 'top' }, width: "256" })),
                    target: '_blank',
                    text: 'Coffee!!'
                },
                {
                    link: 'https://github.com/hylerrix/deno-tutorial',
                    target: '_blank',
                    text: 'Deno Tutorial'
                },
                {
                    link: 'https://github.com/hylerrix/fullstack-react-handbook',
                    target: '_blank',
                    text: 'React Fullstack Handbook'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: 'TBD...'
                },
                {
                    link: 'https://github.com/ningowood',
                    popover: React.createElement("img", { src: "http://qiniu.ningo.cloud/ningo/official-qrcode.png", style: { verticalAlign: 'top' }, width: "256" }),
                    target: '_blank',
                    text: 'NingoWood'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next'
            ],
            port: 8011,
            root: '/',
            serve: false,
            sidebar: {
                '/articles/': [
                    'articles/README.md'
                ]
            },
            srcDir: 'site',
            theme: 'docs',
            title: 'Deno Algorithm',
            tools: {
                backToTop: true,
                editOnGithub: true
            },
            watch: false
        }, content: null, head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }), layoutPath: "_layout.tsx", outputPath: "index.html", pagePath: "index.tsx", script: null, title: "" }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" }))
};
