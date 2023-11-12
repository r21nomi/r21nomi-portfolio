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
                        A 1st work of "Border series" which melt a boundary
                        between digital and analog.<br />
                        This concept is enjoy digital artwork in daily living
                        space.<br />
                        I aimed new expression with technology by combining a
                        display and a wood frame and drawing same visual to both
                        surface.
                    </p>
                    <p class="text">
                        デジタルとアナログの境界を溶かす「Borderシリーズ」の1作目。<br />
                        デジタル作品を生活の中で楽しむことをコンセプトにディスプレイとウッドフレームを組み合わせ、その両面に同じビジュアルを描くことでデジタルテクノロジーを駆使した新たな表現を目指した。<br />
                    </p>
                </div>
            </div>
            <Video url="/video/border_02/b02.mp4" :show-controls="true" />
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
import Video from "~/components/Video.vue";

@Component({
    components: { Video },
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
