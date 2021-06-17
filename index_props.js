import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Deno Algorithm",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deno Algorithm</h1>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Deno Algorithm"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ],
    'date': "2021-06-17T03:03:13.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined
};
