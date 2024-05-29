<template>
    <div class="emaki">
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
                The theme of this work is to symbolically reconstruct EMAKI
                (Japanese picture scrolls) in a unique interpretation. The work
                follows the same pattern, as EMAKI(Japanese picture scrolls) are
                depicted as if the story is progressing from right to left. In
                order to express a never-ending story, this work is designed so
                that the code constantly creates new pictures, and the four
                seasons are represented by colors. Since the same combination of
                elements never appears twice, the viewer becomes one of the
                characters in the picture scroll, superimposing himself or
                herself on the story.<br />Each of the objects has its own
                meaning, and the overlapping of multiple objects forms a
                narrative. In addition, the palette changes from day to night,
                creating a stronger connection between the work and the real
                world.<br />We want the viewer to empty his or her mind and
                simply enjoy the work as if he or she were admiring a landscape.
            </p>
            <p class="text">
                この作品は、日本の絵巻物を現代的な表現に置き換え表現することをテーマにしています。絵巻物は右から左へと物語が進んでいくように描かれているため、この作品もそれにならっています。この作品では終わりのない物語を表現するため、常にプログラムが新たな絵を描き続ける仕様にしており、四季を色で表現しています。同じ柄が二度と現れないため、鑑賞者はその物語と自分の人生を重ね合わせ、絵巻物の登場人物の一人となるのです。
                それぞれの要素には意味があり、複数の要素が重なり合うことで物語が形成されます。さらに、昼と夜とでパレットが変化することで、作品と現実世界との結びつきがより強くなります。
                見る人が心を空っぽにして、風景を眺めるように作品を楽しんでほしいと思います。
            </p>
            <p class="text">
                Material: display
            </p>
            <div class="imgContainer">
                <div class="imgInnerContainer">
                    <a
                        class="img"
                        href="https://generator-staging-sepolia.artblocks.io/0x8651efeba58f94a3785113b6bc60a50aa305df4c/519"
                        target="_blank"
                    >
                        <img src="/img/emaki/spring.jpg" alt="" />
                    </a>
                    <a
                        class="img"
                        href="https://generator-staging-sepolia.artblocks.io/0x8651efeba58f94a3785113b6bc60a50aa305df4c/516"
                        target="_blank"
                    >
                        <img src="/img/emaki/summer.jpg" alt="" />
                    </a>
                    <a
                        class="img"
                        href="https://generator-staging-sepolia.artblocks.io/0x8651efeba58f94a3785113b6bc60a50aa305df4c/514"
                        target="_blank"
                    >
                        <img src="/img/emaki/autumn.jpg" alt="" />
                    </a>
                    <a
                        class="img"
                        href="https://generator-staging-sepolia.artblocks.io/0x8651efeba58f94a3785113b6bc60a50aa305df4c/510"
                        target="_blank"
                    >
                        <img src="/img/emaki/winter.jpg" alt="" />
                    </a>
                </div>
            </div>
            <div class="exhibitionContainer">
                <h2>Exhibition</h2>
                <div class="innerContainer">
                    <p class="flexItem">
                        This work was exhibited at
                        <a
                            href="https://app.brightmoments.io/collections/finale"
                            target="_blank"
                        >
                            <TextWithBackground text="Bright Moments Finale" />
                        </a>
                        exhibition in Venice.
                    </p>
                    <div class="flexItem">
                        <img
                            src="/img/emaki/work_at_brightmoments.jpg"
                            alt=""
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

@Component({
    components: { TextWithBackground },
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/emaki`,
            imageUrl: `${process.env.BASE_URL}img/emaki/emaki.jpg`
        }).getMeta();
    }
})
export default class EmakiPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "emaki") {
                return item;
            }
        }
        return null;
    }

    private get description(): string {
        return this.work.description.replace(
            `A-Mashiro`,
            `<a
                        href="https://linktr.ee/A_Mashiro"
                        target="_blank"
                        >A-Mashiro</a
                    >`
        );
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.emaki
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

        img, iframe
            width 100%

        img
            &.portrait
                width 50%

        iframe
            height 600px
            background-color $black_000
            margin-top 40px

        .imgContainer
            margin-top 20px

            .imgInnerContainer
                display grid
                grid-template-columns repeat(4, 1fr)
                grid-column-gap 8px
                grid-row-gap 8px

                .img
                    img
                        display flex

        .exhibitionContainer
            margin-top 64px

            .innerContainer
                display flex
                gap 8px

                .flexItem
                    flex 1

    +sp()
        .contentsContainer
            iframe
                height 400px

            .imgContainer
                .imgInnerContainer
                    grid-template-columns repeat(2, 1fr)

            .exhibitionContainer
                margin-top 32px

                .innerContainer
                    flex-direction column
</style>
