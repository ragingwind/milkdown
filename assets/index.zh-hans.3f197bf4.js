var n=`# Vue2

\u6211\u4EEC\u4E0D\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 Vue2 \u652F\u6301\uFF0C\u4F46\u4F60\u53EF\u4EE5\u5728 Vue2 \u4E2D\u8F7B\u677E\u4F7F\u7528\u539F\u751F JavaScript \u7248\u672C\u3002

## \u4F9D\u8D56\u5B89\u88C5

\`\`\`bash
# install with npm
npm install @milkdown/core @milkdown/preset-commonmark @milkdown/theme-nord
\`\`\`

## \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6

\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5341\u5206\u7B80\u5355\u3002

\`\`\`html
<template>
    <div ref="editor"></div>
</template>

<script>
    import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
    import { nord } from '@milkdown/theme-nord';
    import { commonmark } from '@milkdown/preset-commonmark';
    export default {
        name: 'Editor',
        props: {
            msg: String,
        },
        mounted() {
            Editor.make()
                .config((ctx) => {
                    ctx.set(rootCtx, this.$refs.editor);
                    ctx.set(defaultValueCtx, this.$props.msg);
                })
                .use(nord)
                .use(commonmark)
                .create();
        },
    };
<\/script>

<style></style>
\`\`\`

### \u5728\u7EBF\u793A\u4F8B

!CodeSandBox{milkdown-vue2-setup-t0cg0?fontsize=14&hidenavigation=1&theme=dark&view=preview}
`;export{n as default};
