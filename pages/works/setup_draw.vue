<template>
    <div class="setupDrawPage">
        <div class="headerContainer">
            <img :src="work.image" alt="" />
            <div class="infoContainer">
                <h1 class="title">{{ work.title }}</h1>
                <p>{{ work.description }}</p>
                <p class="date">{{ work.date }}</p>
            </div>
        </div>
        <div class="contentsContainer">
            <p class="text">
                If you are familiar with "Processing," you may be able to think
                of a specific idea.<br />
                "Setup / Draw" is a work that visualizes the beautiful structure
                of the creative coding tool "Processing. The structure is simple
                but it can produces a wide variety of expressions. The structure
                itself is an art.
            </p>
            <p class="text">
                "Processing"に馴染みのある人であれば、このタイトルを見た時にピンと来る人は多いと思います。<br />
                "Setup /
                Draw"はクリエイティブコーディングのためのツール"Processing"の美しい構造を可視化した作品です。シンプルでありながら多彩な表現が生み出される、その構造自体がアートと言えるでしょう。
            </p>
            <video src="/video/setup_draw/setup_draw.mp4" controls></video>
            <p class="text">
                Material: displays, microcomputers
            </p>
            <p class="text">
                This work was exhibited at
                <a
                    href="https://processing.jp/event/pcdtokyo2023"
                    target="_blank"
                    ><TextWithBackground text="Processing Community Day 2023"
                /></a>
                in Shibuya, Tokyo in 2023.
            </p>
            <p class="text">
                本作は2023年に渋谷で開催された<a
                    href="https://processing.jp/event/pcdtokyo2023"
                    target="_blank"
                    ><TextWithBackground
                        text="Processing Community Day 2023"/></a
                >で展示されました。
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TextWithBackground from "~/components/TextWithBackground.vue";
import { HeadMetaInfo } from "~/headMetaInfo";
import { Work } from "~/types/entity";

@Component({
    components: { TextWithBackground },
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/setup_draw`,
            imageUrl: `${process.env.BASE_URL}img/setup_draw/setup_draw.jpg`
        }).getMeta();
    }
})
export default class SetupDrawPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "setup_draw") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.setupDrawPage
    .headerContainer
        img
            width 100%

        .infoContainer
            padding 0 8px

            .title
                margin-top 20px

            .date
                font-size 1.2rem
                color $gray_888
                margin-top 8px

    .contentsContainer
        padding 0 8px
        margin-top 50px

        .text
            margin-top 20px

            &:first-child
                margin-top 0

        img, video
            width 100%

        img
            &.portrait
                width 50%

        video
            height 600px
            background-color $black_000
            margin-top 40px

        .imgContainer
            margin-top 20px

            .imgInnerContainer
                display flex

                .img
                    flex 1

                &.horizontal
                    flex-direction row
</style>
