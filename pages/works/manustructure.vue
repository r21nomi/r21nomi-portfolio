<template>
    <div class="manustructure">
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
                Production in manufacturing is inherently an engineering
                endeavor that pursues efficiency and precision. Yet within it
                lies an unconscious rhythm and order woven by the repetitive
                movements of machines and the gestures of craftspeople—a
                structured beauty.<br />Manustructure is a work that illuminates
                machines operating in factories and casts their shadows onto a
                support surface, thereby rendering visible the structure of the
                production system itself. What is projected is not the physical
                substance of the machines, but the silhouette of the apparatus
                that continuously generates parts. The forms are abstracted, and
                the concrete existence of machinery emerges as an aesthetic
                structure—that is, as a system.<br />As an artist, NIINOMI has
                proposed the concept of "System as Art," demonstrating an
                attitude that beauty arises not from individual entities but
                from relationships and structures. In this work, pictorial
                composition and poetic rhythm are discovered within the complex,
                non-human movements created by autonomously operating
                machines.<br />
                Here, light serves as the medium that makes the system visible,
                and shadow becomes its "product." By illuminating the repeated
                act of manufacturing, what manifests is not function but beauty.
                This work poses questions at the boundary between industry and
                art, and represents an attempt to discover the structure of
                beauty within the act of making itself.<br />
                <br />
                supported by Yoshikawa Ironworks Co., Ltd.
            </p>
            <p class="text">
                製造業における生産は本来、効率と精度を追求する工学的営みである。しかしその内側には、機械の反復運動や職人の所作が織りなす無意識のリズムと秩序──構造化された美が潜んでいる。<br />
                《Manustructure》は、工場で稼働する機械に光を当て、その影を支持体へ落とすことで生産システムの構造そのものを描き出す作品である。映し出されるのは機械の実体ではなく、部品を生成し続ける装置のシルエット。形態は抽象化され、機械という具体的存在は美的構造体──すなわちシステムとして立ち現れる。<br />
                NIINOMIはアーティストとして "System as Art"
                という概念を提唱し、個体ではなく関係性と構造こそが美を生むという態度を示してきた。本作では、自律的に稼働する機械がつくる複雑で非人間的な運動のなかに、絵画的構成や詩的リズムが見出される。<br />
                ここで光は、システムを可視化するメディウムであり、影はその「生成物」である。反復される製造行為に光を当てることで、機能ではなく美が現前する。本作は、産業と芸術の境界に問いを投げかけ、つくること自体のなかに美の構造を見出す試みである。<br />
                <br />
                協力：吉川鐵工株式会社
            </p>
            <p class="text">
                Material: Aluminium frame, fabric, LED bulb
            </p>
            <div class="figureContainer">
                <div class="iframe">
                    <iframe
                        src="https://www.youtube.com/embed/Zm62P1SrOCQ?si=YDceucvzicWT98jp"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="text">
                    At the exhibition venue, Yoshikawa Ironworks Co., Ltd., this
                    work shine light upon the riveting machines they
                    manufacture, framing the shadows they cast to make their
                    beautiful structure emerge like a painting.<br />
                    展示会場である吉川鐵工株式会社にて、彼らが製造するカシメ機に光を当て、落ちる影をフレームに収めることでその美しい構造を絵画のように立ち上がらせる。
                </div>
            </div>
            <div class="exhibitionContainer">
                <div class="imgContainer">
                    <div class="imgItem">
                        <img src="/img/manustructure/img6.jpg" />
                    </div>
                    <div class="imgItem">
                        <img src="/img/manustructure/img5.jpg" />
                    </div>
                </div>
                <div class="imgContainer">
                    <div class="imgItem">
                        <img src="/img/manustructure/img4.jpg" />
                    </div>
                    <div class="imgItem">
                        <img src="/img/manustructure/img3.jpg" />
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
            url: `${process.env.BASE_URL}works/manustructure`,
            imageUrl: `${process.env.BASE_URL}img/manustructure/img1_16_9.jpg`
        }).getMeta();
    }
})
export default class BreathOfTheSeaPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "manustructure") {
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

.manustructure
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

            .iframe
                iframe
                    width 100%
                    height 600px
                    background-color $black_000

        .exhibitionContainer
            margin-top 64px

            .imgContainer, .videoContainer
                display flex
                gap 4px

                .imgItem, .videoItem
                    flex 1

                    img, video
                        width 100%
                        height 100%
                        object-fit cover

            .imgContainer
                &:nth-child(n + 2)
                    margin-top 4px

            .videoContainer
                margin-top 4px

    +sp()
        .contentsContainer
            .figureContainer
                margin-top 32px

                iframe
                    height 400px

            .exhibitionContainer
                margin-top 32px

                .imgContainer, .videoContainer
                    flex-direction column
</style>
