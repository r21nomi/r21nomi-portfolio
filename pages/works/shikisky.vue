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
                This is one of the artwork series "SHIKI" themed color. <br />
                "SHIKI" is artwork series which show search result by google as
                picture based on a color and natural things comes from the
                color. <br />
                In this artwork, you can see sky searched by google based on
                information "blue" and "sky" as input source.<br />
                This is a digital canvas displays sky in a room.
            </p>
            <p class="text">
                色をテーマにした作品SHIKIシリーズのひとつ。<br />
                SHIKIは、色とそこからイメージする自然物を元にGoogle検索をかけた結果を絵として見せる作品シリーズである。<br />
                本作では、「青」と「空」という情報を入力としてGoogleが探し出した空を映し出す。<br />
                部屋の中に空を飾る青いデジタルキャンバスである。
            </p>
            <div class="imgContainer">
                <div class="imgInnerContainer horizontal">
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_3.jpg" alt="" />
                    </div>
                </div>
                <div class="imgInnerContainer horizontal">
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_5.jpg" alt="" />
                    </div>
                </div>
                <div class="imgInnerContainer horizontal">
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/img/shiki_sky/shiki_sky_7.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Video url="/video/shiki_sky/shiki_sky.mp4" :show-controls="true" />
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
            url: `${process.env.BASE_URL}works/shikisky`,
            imageUrl: `${process.env.BASE_URL}img/shiki_sky/shiki_sky_1.jpg`
        }).getMeta();
    }
})
export default class BorderPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "shikisky") {
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
            height 600px
            background-color $black_000
            margin-top 40px

        .imgContainer
            margin-top 20px

            .imgInnerContainer
                display flex

                &.horizontal
                    flex-direction row
</style>
