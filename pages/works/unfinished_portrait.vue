<template>
    <div class="unfinishedPortraitPage">
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
                The genre of portrait, which has been explored for a long time
                in the history of art, has evolved from the aristocratic and
                religious era, through the modern era when artists began to
                develop new techniques to depict the daily lives of the general
                public, to the modern era with the use of multimedia. In each of
                these periods, most portraits were painted by the hand of the
                artist and delivered to the viewer in a finished form. This work
                is a portrait that will never be completed, and will continue to
                be painted by a computer system. The owner of the work decides
                on the subject via the blockchain, and the system continues to
                draw it. It is a new portrait for the Internet age.
            </p>
            <p class="text">
                アートの歴史の中でも長く探究がなされてきた肖像画というジャンルは、貴族階級や信仰に結びついていた時代から一般大衆の日常を描き新たな技法の開拓を始めた近代期を経て、マルチメディアを用いた現代へと発展してきました。いずれの時代も肖像画の多くは画家の手によって描かれ、一つの出力に落ち着いて鑑賞者の元に届けられます。
                本作は、コンピュータシステムが描き続ける、永遠に完成することのない肖像画です。作品の所有者がブロックチェーンを介して被写体を決め、システムが描き続ける。インターネット時代の新しい肖像画と言えるでしょう。
            </p>
            <Video
                url="/video/unfinished_portrait/unfinished_portrait.mp4"
                :show-controls="true"
            />
            <p class="text">
                Material: display panel, SBC, acrylic, wood board, NFT
            </p>
            <p class="text">
                <a
                    href="https://asystem.dev/unfinished_portrait"
                    target="_blank"
                    ><TextWithBackground text="Check the NFT"
                /></a>
            </p>
            <div class="imgContainer">
                <div class="imgInnerContainer horizontal">
                    <div class="img">
                        <img
                            src="/img/unfinished_portrait/unfinished_portrait_5.jpg"
                            alt=""
                        />
                    </div>
                    <div class="img">
                        <img
                            src="/img/unfinished_portrait/unfinished_portrait_7.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div class="imgInnerContainer horizontal">
                    <div class="img">
                        <img
                            src="/img/unfinished_portrait/unfinished_portrait_6.jpg"
                            alt=""
                        />
                    </div>
                    <div class="img">
                        <img
                            src="/img/unfinished_portrait/unfinished_portrait_8.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <p class="text">
                This work was exhibited at
                <a
                    href="https://avex.jp/en/meetyourart/festival/art_fair_crossover/gallery/?id=640"
                    target="_blank"
                    ><TextWithBackground text="MEET YOUR ART FESTIVAL 2023"
                /></a>
                in Tennozu area, Tokyo in 2023.
            </p>
            <p class="text">
                本作は2023年に天王洲エリア一帯で開催されたアートの展覧会<a
                    href="https://avex.jp/en/meetyourart/festival/art_fair_crossover/gallery/?id=640"
                    target="_blank"
                    ><TextWithBackground text="MEET YOUR ART FESTIVAL 2023"/></a
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
import Video from "~/components/Video.vue";

@Component({
    components: { Video, TextWithBackground },
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/unfinished_portrait`,
            imageUrl: `${process.env.BASE_URL}img/unfinished_portrait/unfinished_portrait.jpg`
        }).getMeta();
    }
})
export default class UnfinishedPortraitPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "unfinished_portrait") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.unfinishedPortraitPage
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

                    img
                        display flex

                    &:nth-child(n + 2)
                      margin-left 8px

                &.horizontal
                    flex-direction row

                &:nth-child(n + 2)
                    margin-top 8px
</style>
