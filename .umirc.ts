import { defineConfig } from 'dumi';

// 'https://github.com/5chao/reacttsui
let base = '/reacttsui'
let publicPath = '/reacttsui/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined
    publicPath = undefined
}

export default defineConfig({
    title: "Happy UI",
    mode: "site",
    outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath
});