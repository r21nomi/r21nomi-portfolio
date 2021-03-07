<template>
    <div class="borderPage">
        <div class="headerContainer">
            <img :src="work.image" alt="" />
            <div class="infoContainer">
                <h1 class="title">{{ work.title }}</h1>
                <p>{{ work.description }}</p>
                <p class="date">{{ work.date }}</p>
            </div>
        </div>
        <div class="contentsContainer">
            <div class="after">
                <p class="text">
                    A work with a clock motif, derivation work of "Border
                    series" which melt boundary between digital and analog.<br />
                    A visual of middle part in arcs mounted concentrically is
                    gradually animating.<br />
                    Vivid three arcs are visual accent and also information
                    represent "hour, minuit, second".<br />
                    In media arts massive installation stands out, I explored
                    possibility of video as painting displayed in living space.
                </p>
                <p class="text">
                    デジタルとアナログの境界を溶かす「Borderシリーズ」の派生で、時計をモチーフにした作品。<br />
                    同心円状に描かれたグラフィックの中で、中心部分のみがゆっくりアニメーションしている。<br />
                    ビビッドな3本の円弧はビジュアルのアクセントであると共に「時、分、秒」を表す情報でもある。<br />
                    大規模なインスタレーションが目立つメディアアートの中で、日常の生活空間に飾られる絵画としての映像の可能性を模索した。
                </p>
            </div>
            <div class="imgContainer horizontal">
                <div><img src="/img/border_clock/bc01_2.jpg" alt="" /></div>
                <div><img src="/img/border_clock/bc01_3.jpg" alt="" /></div>
            </div>
            <video src="/video/border_clock/bc01.mp4" controls></video>
            <p class="text">
                Material: display, wood frame, microcomputer
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { HeadMetaInfo } from "~/headMetaInfo";
import { Work } from "~/types/entity";

@Component({
    components: {},
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/borderclock`,
            imageUrl: `${process.env.BASE_URL}img/border_clock/bc01_1.jpg`
        }).getMeta();
    }
})
export default class BorderPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "borderclock") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.borderPage
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
            height 500px
            background-color $black_000
            margin-top 20px

        .imgContainer
            display flex
            margin-top 20px

            &.horizontal
                flex-direction row
</style>
