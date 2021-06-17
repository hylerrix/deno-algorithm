import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "TIMELINE.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "TIMELINE.html",
    'title': "Changelog",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Changelog</h1>\n<h2 id="20210323">20210323<a class="anchor" href="#20210323">§</a></h2>\n<ul>\n<li>make repo into ebook version with pagic and deno</li>\n<li>publish to <a href="http://deno-algorithm.js.org">deno-algorithm.js.org</a></li>\n</ul>\n<h2 id="20201025">20201025<a class="anchor" href="#20201025">§</a></h2>\n<ul>\n<li>init project, algorithm is a long way to learn</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Changelog"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="20210323">20210323<a class="anchor" href="#20210323">§</a></h2>\n<ul>\n<li>make repo into ebook version with pagic and deno</li>\n<li>publish to <a href="http://deno-algorithm.js.org">deno-algorithm.js.org</a></li>\n</ul>\n<h2 id="20201025">20201025<a class="anchor" href="#20201025">§</a></h2>\n<ul>\n<li>init project, algorithm is a long way to learn</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#20210323" }, "20210323")),
            React.createElement("li", null,
                React.createElement("a", { href: "#20201025" }, "20201025")))),
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ],
    'date': "2021-06-17T03:03:13.000Z",
    'updated': null,
    'excerpt': "20210323 - make repo into ebook version with pagic and deno - publish to deno-algorithm.js.org 20201025 - init project, algorithm is a long way to learn",
    'cover': undefined
};
