var n=`# Milkdown

![greeting bear](/polar.jpeg)

> Milkdown \u662F\u4E00\u4E2A\u6240\u89C1\u5373\u6240\u5F97\u7684\u7F16\u8F91\u5668\u6846\u67B6\u3002
>
> :baby_bottle: \u8FD9\u91CC\u662F[\u4EE3\u7801\u4ED3\u5E93] (\u70B9\u51FB\u53F3\u952E\u6253\u5F00\u94FE\u63A5)\u3002\\
> \u6211\u4EEC ~~\u53EA\u652F\u6301 commonmark~~. GFM \u4E5F\u652F\u6301\uFF01

\u60A8\u53EF\u4EE5\u5728**\u53CC\u680F\u7F16\u8F91\u6A21\u5F0F**\u4E2D\u770B\u5230 markdown \u6587\u672C\u3002

-   \u7279\u6027
    -   [x] \u{1F4DD} **\u6240\u89C1\u5373\u6240\u5F97\u7684 Markdown** - \u4EE5\u4E00\u79CD\u4F18\u96C5\u7684\u65B9\u5F0F\u7F16\u5199 markdown
    -   [x] \u{1F3A8} **\u53EF\u5B9A\u5236\u4E3B\u9898** - \u4E3B\u9898\u53EF\u4EE5\u901A\u8FC7 npm \u5305\u5B89\u88C5\u548C\u5171\u4EAB
    -   [x] \u{1F3AE} **\u53EF\u4EA4\u4E92** - \u901A\u8FC7\u63D2\u4EF6\u652F\u6301\u4F60\u7684\u8111\u6D1E
    -   [x] \u{1F9BE} **\u503C\u5F97\u4FE1\u8D56** - \u57FA\u4E8E[prosemirror](https://prosemirror.net/) \u548C [remark](https://github.com/remarkjs/remark)\u6784\u5EFA
    -   [x] \u26A1 **\u659C\u7EBF\u6307\u4EE4\u548C\u5DE5\u5177\u6761** - \u8BA9\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] \u{1F9EE} **\u6570\u5B66\u652F\u6301** - LaTeX \u6570\u5B66\u516C\u5F0F\u652F\u6301\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] \u{1F4CA} **\u8868\u683C\u652F\u6301** - \u62E5\u6709\u6D41\u7545\u7684 ui \u7684\u8868\u683C\u652F\u6301\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] \u{1F4F0} **\u56FE\u8868\u652F\u6301** - \u57FA\u4E8E[mermaid](https://mermaid-js.github.io/mermaid/#/)\u7684\u56FE\u8868\u652F\u6301\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] \u{1F37B} **\u534F\u540C\u7F16\u8F91** - \u57FA\u4E8E[yjs](https://docs.yjs.dev/)\u7684\u534F\u540C\u7F16\u8F91\u652F\u6301\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] \u{1F4BE} **\u526A\u8D34\u677F** - \u652F\u6301 markdown \u683C\u5F0F\u7684\u590D\u5236\u7C98\u8D34\uFF0C\u901A\u8FC7\u63D2\u4EF6
    -   [x] :+1: **Emoji** - \u652F\u6301 emoji \u5FEB\u6377\u6307\u4EE4\u548C\u9009\u62E9\u5668\uFF0C\u901A\u8FC7\u63D2\u4EF6
-   \u4F5C\u8005
    -   \u5F00\u53D1\u8005: [Mirone][mirone]
    -   \u8BBE\u8BA1\u5E08: [Meo][meo]

---

\u4F60\u53EF\u4EE5\u6DFB\u52A0\u884C\u5185\u4EE3\u7801\u4F8B\u5982 \`inline code\` \u548C\u4EE3\u7801\u5757\uFF1A

\`\`\`javascript
function main() {
    console.log('Hello milkdown!');
}
\`\`\`

> Tips: \u4F7F\u7528\`Mod-Enter\`\u6765\u9000\u51FA\u5757\u7EA7\u5143\u7D20\uFF0C\u4F8B\u5982\u4EE3\u7801\u5757\u3002

---

\u4F60\u53EF\u4EE5\u8F93\u5165\`||\`\u548C\u4E00\u4E2A\u7A7A\u683C\u6765\u521B\u5EFA\u8868\u683C\uFF1A

| \u8868\u5934 1 |   \u8868\u5934 2   |
| ------ | :--------: |
| \u5185\u5BB9 1 | ~~\u5185\u5BB9 1~~ |
| \u5185\u5BB9 2 | **\u5185\u5BB9** 2 |

---

\u6570\u5B66\u516C\u5F0F\u901A\u8FC7 [TeX \u8868\u8FBE\u5F0F](https://en.wikipedia.org/wiki/TeX)\u652F\u6301\u3002

\u8FD9\u91CC\u6211\u4EEC\u6709\u884C\u5185\u516C\u5F0F\uFF1A $E = mc^2$\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u5E76\u7F16\u8F91\u5B83\u3002

\u6570\u5B66\u516C\u5F0F\u5757\u4E5F\u662F\u652F\u6301\u7684\u3002

$$
\\begin{aligned}
T( (v_1 + v_2) \\otimes w) &= T(v_1 \\otimes w) + T(v_2 \\otimes w) \\\\
T( v \\otimes (w_1 + w_2)) &= T(v \\otimes w_1) + T(v \\otimes w_2) \\\\
T( (\\alpha v) \\otimes w ) &= T( \\alpha ( v \\otimes w) ) \\\\
T( v \\otimes (\\alpha w) ) &= T( \\alpha ( v \\otimes w) ) \\\\
\\end{aligned}
$$

\u4F60\u53EF\u4EE5\u8F93\u5165\`$$\`\u548C\u4E00\u4E2A\u7A7A\u683C\u6765\u521B\u5EFA\u6570\u5B66\u516C\u5F0F\u5757\u3002

---

\u4F7F\u7528 [emoji \u5FEB\u6377\u6307\u4EE4](https://www.webfx.com/tools/emoji-cheat-sheet/) \u4F8B\u5982 \`:+1:\` \u6765\u6DFB\u52A0 emoji.

\u5728\u8F93\u5165\u65F6\uFF0C\u4F60\u4E5F\u8BB8\u6CE8\u610F\u5230\u4E86 emoji \u8FC7\u6EE4\u5668\uFF0C\u5C1D\u8BD5\u8F93\u5165\`:baby\`\u6765\u67E5\u770B\u5B83\u3002

\u4F60\u4E5F\u53EF\u4EE5\u8F93\u5165\`:emoji:\`\u6765\u6253\u5F00 emoji \u9009\u62E9\u5668\u3002

---

\u56FE\u8868\u7531 [mermaid](https://mermaid-js.github.io/mermaid/#/)\u9A71\u52A8\u3002

\u4F60\u53EF\u4EE5\u8F93\u5165 \` \`\`\`mermaid \` \u6765\u6DFB\u52A0\u56FE\u8868\u3002

\`\`\`mermaid
graph TD;
    EditorState-->EditorView;
    EditorView-->DOMEvent;
    DOMEvent-->Transaction;
    Transaction-->EditorState;
\`\`\`

---

Have fun!

[\u4EE3\u7801\u4ED3\u5E93]: https://github.com/Saul-Mirone/milkdown
[prosemirror]: https://prosemirror.net/
[yjs]: https://docs.yjs.dev/
[remark]: https://github.com/remarkjs/remark
[mirone]: https://github.com/Saul-Mirone
[meo]: https://www.meo.cool/
`;export{n as default};
