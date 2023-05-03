export class HeadMetaInfo {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    twitterCardType: string;
    type: string;

    constructor(arg: any = {}) {
        this.title = arg.title || "NIINOMI";
        this.description =
            arg.description || "Portfolio site of media artist NIINOMI.";
        this.url = arg.url || "https://niinomi.art/";
        this.imageUrl = arg.imageUrl || "https://niinomi.art/img/ogp.png";
        this.twitterCardType = arg.twitterCardType || "summary_large_image";
        this.type = arg.type || "website";
    }

    getMeta() {
        return {
            title: this.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.description
                },
                { hid: "og:title", property: "og:title", content: this.title },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: this.description
                },
                { hid: "og:type", property: "og:type", content: this.type },
                { hid: "og:url", property: "og:url", content: this.url },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: this.imageUrl
                },
                // Twitter
                {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: this.twitterCardType
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: this.title
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: this.description
                },
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: this.imageUrl
                }
            ]
        };
    }
}
