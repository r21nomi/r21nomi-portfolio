<template>
    <div class="theShapeOfTime">
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
                "The Shape of Time" is a work reconstructed as a sculpture by
                recapturing the characteristics of the display media.<br />A
                display is a device for outputting information visually, and we
                are generally interested in the events that occur within its
                rectangular plane. However, when we consider a display as a
                thing, the collection of such things forms a separate object,
                and its surface can be regarded as a variable texture clothed
                with visual information.<br />In this work, the surface is given
                a time axis.<br />The individual displays are programmed to
                change their cycles, yet continue to output images regularly.
                When these multiple displays are combined, what is created is
                the form of time represented by the images. The texture changes
                repeated at regular intervals create continuity and bring out
                the shape of the object. It is in the form of a wave, a
                cyclically changing form of time.<br />The display before our
                eyes today is not only a window through which we can see or
                project information, but it is also a texture with a time axis
                and can be a medium for constructing objects.
            </p>
            <p class="text">
                《The Shape of
                Time》はディスプレイというメディアの特性を捉え直し、彫刻として再構築した作品です。<br />
                ディスプレイは情報を視覚的に出力するための装置であり、一般的にはその矩形平面の中で起こる事象に関心が向けられます。しかし、モノとしてのディスプレイを考えた時、それらの集合は一つの別のオブジェクトを形成し、その表面は視覚情報を纏った可変のテクスチャであると見做せます。<br />
                本作では、その表面に時間軸を与えます。<br />
                個々のディスプレイはプログラムによってその周期を変化させながら、それでも規則的に映像を出力し続けます。それらが複数に合わさり、つくられるのは映像が表す時間の形です。一定間隔で繰り返されるテクスチャの変化は連続性を生み出し、オブジェクトの形状を浮かび上がらせます。それは波の形をしており、周期的に変化する時間の形です。<br />
                今日、我々の眼前にあるディスプレイは、情報を映し出す、あるいは覗くための窓というだけでなく、時間軸を持ったテクスチャであり、物体を構成するメディアにもなり得るのです。
            </p>
            <div class="iframe">
                <iframe
                    src="https://www.youtube.com/embed/izvda78g-fE?si=zN7w72j0zik8wubB"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <p class="text">
                Material: displays, SBCs
            </p>
            <div class="imgContainer">
                <div class="imgInnerContainer">
                    <div class="img">
                        <img
                            src="/img/the_shape_of_time/the_shape_of_time_1.jpg"
                            alt=""
                        />
                    </div>
                    <div class="img">
                        <img
                            src="/img/the_shape_of_time/the_shape_of_time_3.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div class="imgInnerContainer">
                    <div class="img">
                        <img
                            src="/img/the_shape_of_time/the_shape_of_time_2.jpg"
                            alt=""
                        />
                    </div>
                    <div class="img">
                        <img
                            src="/img/the_shape_of_time/the_shape_of_time_4.jpg"
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

@Component({
    components: {},
    head() {
        const _this = this as any;
        return new HeadMetaInfo({
            title: _this.work.title,
            description: _this.work.description,
            url: `${process.env.BASE_URL}works/the_shape_of_time`,
            imageUrl: `${process.env.BASE_URL}img/the_shape_of_time/the_shape_of_time.jpg`
        }).getMeta();
    }
})
export default class TheShapeOfTimePage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "the_shape_of_time") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.theShapeOfTime
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
                display flex
                flex-direction row

                .img
                    flex 1

                    img
                        display flex

                    &:nth-child(n + 2)
                      margin-left 8px

                &:nth-child(n + 2)
                    margin-top 8px

    +sp()
        .contentsContainer
            iframe
                height 400px

            .imgContainer
                .imgInnerContainer
                    flex-direction column

                    .img
                        &:nth-child(n + 2)
                            margin-left 0
                            margin-top 8px
</style>
