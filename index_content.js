const style = `
h2 {
  font-weight: normal;
}
.main_article {
  width: 960px;
  max-width: 960px;
  padding-bottom: 0;
}
.cards {
  display: flex;
  justify-content: center;
  margin: 3rem -1rem 0 -1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}
.cards > div {
  width: 20rem;
  padding: 0 1rem;
}
.cards ul {
  color: var(--color-text-muted);
}
.btn {
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: 0;
  cursor: pointer;
  opacity: 0.9;
  font-size: 14px;
  text-decoration: none;
  background-color: var(--color-border);
  color: var(--color-text);
}
.btn:hover {
  text-decoration: none;
}
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
}
.btn:hover {
  opacity: 1;
}
@media screen and (max-width: 44rem) {
  h2 {
    text-align: center;
  }
  .cards {
    flex-direction: column;
  }
  .cards > div {
    width: 100vw;
  }
  .cards ul {
    text-align: center;
    padding-left: 0;
    list-style: none;
  }
  pre {
    margin-left: -1rem;
    margin-right: -1rem;
  }
}
`;
const IndexPage = () => (React.createElement(React.Fragment, null,
    React.createElement("div", null,
        React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
        React.createElement("h1", { style: {
                marginTop: '3.5rem',
                textAlign: 'center',
                fontSize: '64px',
                color: 'hsl(210, 70%, 50%)'
            } }, "Deno Algotithm"),
        React.createElement("p", { style: {
                fontSize: '28px',
                marginTop: '2rem',
                textAlign: 'center',
                color: 'var(--color-text-muted)'
            } }, "Learn Algorithms in Deno and TypeScript"),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
            } },
            React.createElement("a", { className: "btn btn-primary", href: "/articles/" }, "Start Reading"),
            React.createElement("a", { className: "btn", target: "_blank", href: "https://github.com/hylerrix/blitzjs-tutorial" }, "Source Code"))),
    React.createElement("h2", null, "Make a Contribution!"),
    React.createElement("pre", { style: {
            fontSize: '1rem'
        } },
        React.createElement("code", { dangerouslySetInnerHTML: {
                __html: `# direct in issues
https://github.com/hylerrix/blitzjs-tutorial/issues

# or clone & pr
git clone https://github.com/\${YOUR_NAME}/blitzjs-tutorial
git add . && git commit -s -m "feat(docs): add a new article"
git push origin main`
            } }))));
export default IndexPage;
