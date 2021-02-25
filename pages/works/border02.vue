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
            <div class="imgContainer horizontal">
                <div><img src="/img/border_02/b02_2.jpg" alt="" /></div>
                <div class="after">
                    <p class="text">
                        Digital technology penetrate into our daily life and the
                        border between digital and analog become blurred.
                        However art with technology often becomes extraordinary
                        thing separated from daily life.<br />"Border" is an
                        artwork melt the boundaries between digital and analog
                        by unifying artwork and a display frame which divides
                        video and real space.<br />In media art massive
                        installation stands out, I explored possibility of video
                        as painting displayed in living space.
                    </p>
                    <p class="text">
                        今や我々の生活の中には当たり前にデジタルテクノロジーが介入しており、デジタルとアナログの境界は限りなく曖昧になってきている。しかし、テクノロジーがアートと組み合わさるとき、その多くは生活からは切り離された非日常のものとなる。
                        <br />Borderは映像と実空間を区切るディスプレイのフレームを作品と一体化させることでデジタルとアナログの境界を溶かす作品である。
                        <br />大規模なインスタレーションが目立つメディアアートの中で、日常の生活空間に飾られる絵画としての映像の可能性を模索した。
                    </p>
                </div>
            </div>
            <video src="/video/border_02/b02.mp4" controls></video>
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
            url: `${process.env.BASE_URL}works/border02`,
            imageUrl: `${process.env.BASE_URL}img/border_02/b02_1.jpg`
        }).getMeta();
    }
})
export default class BorderPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "border02") {
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

        .imgContainer
            display flex

            .after
                margin-left 20px

            &.horizontal
                flex-direction row
</style>
