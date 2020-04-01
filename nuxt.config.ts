const environment = process.env.NODE_ENV || "development";
const { ENV } = require(`./configs/env.${environment}.js`);
const isProductionEnv = environment === "production";

export default {
    mode: "universal",
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
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
        "@nuxtjs/google-analytics"
    ],
    modules: ["@nuxtjs/axios", "nuxt-webfontloader"],
    webfontloader: {
        google: {
            families: ["Noto+Sans+JP:400,700,900&display=swap&subset=japanese"]
        }
    },
    googleAnalytics: {
        id: "UA-154958328-1",
        debug: {
            sendHitTask: isProductionEnv
        }
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
