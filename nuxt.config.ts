import { HeadMetaInfo } from "./headMetaInfo";
const headMetaInfo = new HeadMetaInfo();
const environment = process.env.NODE_ENV || "development";
const { ENV } = require(`./configs/env.${environment}.js`);

export default {
    mode: "universal",
    head: {
        title: headMetaInfo.title,
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, viewport-fit=cover"
            },
            {
                name: "author",
                content: "NIINOMI"
            },
            {
                hid: "og:site_name",
                name: "og:site_name",
                content: headMetaInfo.title
            },
            {
                hid: "og:title",
                name: "og:title",
                content: headMetaInfo.title
            },
            {
                hid: "og:type",
                name: "og:type",
                content: headMetaInfo.type
            },
            {
                hid: "og:url",
                name: "og:url",
                content: headMetaInfo.url
            },
            {
                hid: "og:image",
                name: "og:image",
                content: headMetaInfo.imageUrl
            },
            {
                hid: "description",
                name: "description",
                content: headMetaInfo.description
            },
            {
                hid: "fb:app_id",
                name: "fb:app_id",
                content: "1759613840911839"
            },
            {
                hid: "twitter:site",
                name: "twitter:site",
                content: "@r21nomi"
            },
            {
                hid: "twitter:card",
                name: "twitter:card",
                content: headMetaInfo.twitterCardType
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: headMetaInfo.imageUrl
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    loading: { color: "#fff" },
    css: ["@/assets/style/common.styl"],
    plugins: [],
    buildModules: [
        "@nuxtjs/eslint-module",
        "@nuxt/typescript-build",
        "@nuxtjs/google-gtag"
    ],
    modules: ["@nuxtjs/axios", "nuxt-webfontloader"],
    webfontloader: {
        google: {
            families: ["Noto+Sans+JP:400,700,900&display=swap&subset=japanese"]
        }
    },
    "google-gtag": {
        id: ENV.GOOGLE_ANALYTICS_ID,
        debug: false
    },
    build: {
        extend(config: any, ctx: any) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|ts|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    },
    env: ENV
};
