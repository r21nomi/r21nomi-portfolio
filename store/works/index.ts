import { WorksState } from "~/types/state";

export const state = (): WorksState => ({
    private: [
        {
            title: "Daily Creative Coding",
            image: "/img/daily_creative_coding.jpg",
            video: "",
            date: "2019/09 ~",
            description: "Small digital art pieces I create almost every day.",
            skill: "TouchDesigner / Unity / GLSL / WebGL",
            link: "https://neort.io/9Bqy2IWae5gAXfMSM4cHStP2dxP2"
        },
        {
            title: "VJ for AOAZA in TECHS",
            image: "/img/aoaza.jpg",
            video: "https://www.youtube.com/watch?v=yJO7UttlhxM",
            date: "2019/10",
            description: "Live visual performance for AOAZA.",
            skill: "TouchDesigner",
            link: "https://www.youtube.com/watch?v=yJO7UttlhxM"
        },
        {
            title: "Webcam Audio Visualizer",
            image: "/img/webcam_audio_visualizer.jpg",
            video: "",
            date: "2019/09",
            description:
                "A tutorial on how to create a Three.js powered audio visualizer that takes input from the user's webcam.",
            skill: "Three.js",
            link:
                "https://tympanus.net/codrops/2019/09/06/how-to-create-a-webcam-audio-visualizer-with-three-js"
        },
        {
            title: "NEORT",
            image: "/img/neort.jpg",
            video: "",
            date: "2019/02 ~",
            description:
                "NEORT is Digital Art platform I've been developing as CEO / engineer.",
            skill: "TypeScript / Nuxt.js / Go",
            link: "https://neort.io/"
        },
        {
            title: "Tiny Digital Frame",
            image: "/img/tiny_digital_frame.jpg",
            video: "",
            date: "2018/08",
            description:
                "Tiny digital frame which show generative art mode with GLSL on Raspberry PI.",
            skill: "Raspberry PI / node.js",
            link: ""
        },
        {
            title: "PATTERNBRELLA",
            image: "/img/patternbrella.jpg",
            video: "https://www.youtube.com/watch?v=rXw-gmfmxfM",
            date: "2016/09",
            description:
                "A presentation of new umbrella to make people happy in rainy situation. This is the artwork of BaPA 3rd.",
            skill: "openFrameworks / Java",
            link: "https://www.youtube.com/watch?v=rXw-gmfmxfM"
        },
        {
            title: "Touch The Nature",
            image: "/img/touch_the_nature.jpg",
            video: "https://vimeo.com/162671072",
            date: "2015/08",
            description:
                "Installation which display the lights by touching the plant.",
            skill: "Processing / SuperCollider",
            link: "https://vimeo.com/162671072"
        },
        {
            title: "AWA Android",
            image: "/img/awa.jpg",
            video: "",
            date: "2015/08 ~ 2018/11",
            description:
                "I had been developing Music streaming service 'AWA' as lead Android developer.",
            skill: "Kotlin / Java",
            link:
                "https://play.google.com/store/apps/details?id=fm.awa.liverpool"
        }
    ],
    company: []
});
