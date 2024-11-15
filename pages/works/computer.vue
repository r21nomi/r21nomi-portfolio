<template>
    <div class="computer">
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
                By dismantling and sensitively rearranging the components that
                make up the computer, this work expresses the inherent roughness
                and sensitivity of the computer while exposing its inherent
                logical aspects.
            </p>
            <p class="text">
                コンピューターを構成する部品を解体し感覚的に再配置することで、それが本来持つ論理的な側面を露わにしながらも内在する荒々しさや感性的な側面を表現した作品。
            </p>
            <p class="text">
                Material: Motherboard, CPU, memory, SSD, power supply unit,
                monitor
            </p>
            <div class="exhibitionContainer">
                <Video
                    url="/video/computer/computer.mp4"
                    :show-controls="true"
                />
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
            url: `${process.env.BASE_URL}works/computer`,
            imageUrl: `${process.env.BASE_URL}img/computer/computers.jpg`
        }).getMeta();
    }
})
export default class ComputerPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "computer") {
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

.computer
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

        .exhibitionContainer
            margin-top 64px

            .video
                width 50%

    +sp()
        .contentsContainer
            .exhibitionContainer
                margin-top 32px

                .video
                    width 100%
</style>
