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
            <p class="text">
                Digital technology penetrate into our daily life and the border
                between digital and analog become blurred. However art with
                technology often becomes extraordinary thing separated from
                daily life.<br />"Border" is an artwork melt the boundaries
                between digital and analog by unifying artwork and a display
                frame which divides video and real space.<br />In media art
                massive installation stands out, I explored possibility of video
                as painting displayed in living space.
            </p>
            <p class="text">
                今や我々の生活の中には当たり前にデジタルテクノロジーが介入しており、デジタルとアナログの境界は限りなく曖昧になってきている。しかし、テクノロジーがアートと組み合わさるとき、その多くは生活からは切り離された非日常のものとなる。
                <br />Borderは映像と実空間を区切るディスプレイのフレームを作品と一体化させることでデジタルとアナログの境界を溶かす作品である。
                <br />大規模なインスタレーションが目立つメディアアートの中で、日常の生活空間に飾られる絵画としての映像の可能性を模索した。
            </p>
            <div class="imgContainer horizontal">
                <div><img src="/img/border/border_red.jpg" alt="" /></div>
                <div><img src="/img/border/border_green.jpg" alt="" /></div>
            </div>
            <video src="/video/border/borders.mp4" controls></video>
            <div class="imgContainer horizontal">
                <div><img src="/img/border/border_pixel.jpg" alt="" /></div>
                <div><img src="/img/border/border_blob.jpg" alt="" /></div>
            </div>
            <p class="text">
                Material: display, wood frame, microcomputer
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Work } from "~/types/entity";

@Component({
    components: {}
})
export default class BorderPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "border") {
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
            margin-top 20px

        img
            &.portrait
                width 50%
        .imgContainer
            display flex

            &.horizontal
                flex-direction row
</style>
