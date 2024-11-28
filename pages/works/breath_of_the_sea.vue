<template>
    <div class="breathOfTheSea">
        <div class="headerContainer">
            <img :src="work.image" alt="" />
            <div class="infoContainer">
                <h1 class="title">{{ work.title }}</h1>
                <p class="description" v-html="description"></p>
                <p class="date">{{ work.date }}</p>
            </div>
        </div>
        <div class="contentsContainer">
            <p class="text">
                Waves are like breathing. They come and go in a steady rhythm,
                and their movements give us a sense of organic life. It is as if
                the sea is a living, breathing organism. In this work, the sea
                appears in a corner of the city of Atami and continues to exist
                in the space as an organic being that breathes in the same way
                that people do. The breath of the sea (the sound of waves), a
                symbol of Atami, is captured in real time on the seashore and
                reflected in the artworks exhibited in the city. It appears as a
                digital sea in the city of Atami. The electronic sea depicted in
                front of our eyes is a proof of the sea's life activity that is
                breathing at this very moment.
            </p>
            <p class="text">
                波は呼吸のようだ。一定のリズムで寄せては返すを繰り返し、その動きは有機的な生命を感じさせる。まるで海が呼吸する生き物のようである。
                本作は、熱海の街の一角に海を出現させ、それを人の営みと同様に呼吸する有機的な存在として空間に存在させ続ける作品である。
                熱海の象徴である海の呼吸（波の音）を海辺でリアルタイムで収音し、街中で展示されている作品に反映。熱海の街にデジタルの海として現れる。
                目の前で描かれる電子の海は、今この瞬間に息をしている海の生命活動の証である。
            </p>
            <p class="text">
                Material: Monitor, Raspberry Pi, Pipes / Microphone, Raspberry
                Pi, Monitor, Pipes, Wood board
            </p>
            <div class="figureContainer">
                <div class="imgItem">
                    <img src="/img/breath_of_the_sea/stream.jpg" />
                </div>
            </div>
            <div class="exhibitionContainer">
                <div class="imgContainer">
                    <div class="imgItem">
                        <img
                            src="/img/breath_of_the_sea/breath_of_the_sea_2.jpg"
                        />
                    </div>
                    <div class="imgItem">
                        <img
                            src="/img/breath_of_the_sea/breath_of_the_sea_3.jpg"
                        />
                    </div>
                </div>
                <div class="videoContainer">
                    <div class="videoItem">
                        <Video
                            url="/video/breath_of_the_sea/breath_of_the_sea_screen.mp4"
                            :show-controls="true"
                        />
                    </div>
                    <div class="videoItem">
                        <Video
                            url="/video/breath_of_the_sea/breath_of_the_sea_device.mp4"
                            :show-controls="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { HeadMetaInfo } from "~/headMetaInfo";
import { Work } from "~/types/entity";
import TextWithBackground from "@/components/TextWithBackground.vue";
import Video from "~/components/Video.vue";

@Component({
    components: { Video, TextWithBackground },
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/breath_of_the_sea`,
            imageUrl: `${process.env.BASE_URL}img/breath_of_the_sea/breath_of_the_sea.jpg`
        }).getMeta();
    }
})
export default class BreathOfTheSeaPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "breath_of_the_sea") {
                return item;
            }
        }
        return null;
    }

    private get description(): string {
        return this.work.description;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.breathOfTheSea
    .headerContainer
        img
            width 100%

        .infoContainer
            padding 0 8px

            .title
                margin-top 20px

            .description
                & >>> a
                    background linear-gradient(transparent 85%, $accent_color 0)

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

        .figureContainer
            margin-top 64px

            img
                width 100%

        .exhibitionContainer
            margin-top 64px

            .imgContainer, .videoContainer
                display flex
                gap 4px

                .imgItem, .videoItem
                    img, video
                        width 100%
                        height 100%
                        object-fit cover

            .videoContainer
                margin-top 4px

    +sp()
        .contentsContainer
            .figureContainer
                margin-top 32px

            .exhibitionContainer
                margin-top 32px

                .imgContainer, .videoContainer
                    flex-direction column
</style>
