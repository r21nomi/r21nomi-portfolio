import { WorksState } from "~/types/state";

export const state = (): WorksState => ({
    private: [
        {
            id: "border",
            title: "Border Series",
            image: "/img/border_front.jpg",
            video: "",
            date: "2020/12",
            description:
                "Artwork series combined digital technology and analog media.",
            skill: "",
            link: {
                url: "/works/border",
                isExternal: false
            }
        },
        {
            id: "private_public",
            title: "Private Public",
            image: "/img/private_public.jpg",
            video: "",
            date: "2020/02",
            description: "Installation projected with 8K projector.",
            skill: "",
            link: {
                url: "/works/private_public",
                isExternal: false
            }
        },
        {
            id: "",
            title: "Daily Creative Coding",
            image: "/img/daily_creative_coding.jpg",
            video: "",
            date: "2019/09 ~",
            description: "Small digital art pieces I create almost every day.",
            skill: "TouchDesigner / Unity / GLSL / WebGL",
            link: {
                url: "https://neort.io/9Bqy2IWae5gAXfMSM4cHStP2dxP2",
                isExternal: true
            }
        },
        {
            id: "",
            title: "VJ for AOAZA in TECHS",
            image: "/img/aoaza.jpg",
            video: "https://www.youtube.com/watch?v=yJO7UttlhxM",
            date: "2019/10",
            description: "Live visual performance for AOAZA.",
            skill: "TouchDesigner",
            link: {
                url: "https://www.youtube.com/watch?v=yJO7UttlhxM",
                isExternal: true
            }
        },
        {
            id: "",
            title: "Webcam Audio Visualizer",
            image: "/img/webcam_audio_visualizer.jpg",
            video: "",
            date: "2019/09",
            description:
                "A tutorial on how to create a Three.js powered audio visualizer that takes input from the user's webcam.",
            skill: "Three.js",
            link: {
                url:
                    "https://tympanus.net/codrops/2019/09/06/how-to-create-a-webcam-audio-visualizer-with-three-js",
                isExternal: true
            }
        },
        {
            id: "",
            title: "NEORT",
            image: "/img/neort.jpg",
            video: "",
            date: "2019/02 ~",
            description:
                "NEORT is Digital Art platform I've been developing as CEO / engineer.",
            skill: "TypeScript / Nuxt.js / Go",
            link: {
                url: "https://neort.io/",
                isExternal: true
            }
        },
        {
            id: "",
            title: "Tiny Digital Frame",
            image: "/img/tiny_digital_frame.jpg",
            video: "",
            date: "2018/08",
            description:
                "Tiny digital frame which show generative art mode with GLSL on Raspberry PI.",
            skill: "Raspberry PI / node.js",
            link: {
                url: "",
                isExternal: true
            }
        },
        {
            id: "",
            title: "PATTERNBRELLA",
            image: "/img/patternbrella.jpg",
            video: "https://www.youtube.com/watch?v=rXw-gmfmxfM",
            date: "2016/09",
            description:
                "A presentation of new umbrella to make people happy in rainy situation. This is the artwork of BaPA 3rd.",
            skill: "openFrameworks / Java",
            link: {
                url: "https://www.youtube.com/watch?v=rXw-gmfmxfM",
                isExternal: true
            }
        },
        {
            id: "",
            title: "Touch The Nature",
            image: "/img/touch_the_nature.jpg",
            video: "https://vimeo.com/162671072",
            date: "2015/08",
            description:
                "Installation which display the lights by touching the plant.",
            skill: "Processing / SuperCollider",
            link: {
                url: "https://vimeo.com/162671072",
                isExternal: true
            }
        },
        {
            id: "",
            title: "AWA Android",
            image: "/img/awa.jpg",
            video: "",
            date: "2015/08 ~ 2018/11",
            description:
                "I had been developing Music streaming service 'AWA' as lead Android developer.",
            skill: "Kotlin / Java",
            link: {
                url:
                    "https://play.google.com/store/apps/details?id=fm.awa.liverpool",
                isExternal: true
            }
        }
    ],
    company: []
});
