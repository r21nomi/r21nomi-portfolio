<template>
    <div class="privatePublicPage">
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
                Ultra high definition format 8K is not widely used yet for
                personal use and it is only seen in public space. On the other
                hand, smartphone is an icon of private many people have. I
                regarded 8K and smartphone as "huge screen in public space" and
                "private handy device", the artwork which a message sent by
                audience via smartphone is visualized as text sculpture onto
                screen was created. For visual displayed onto the screen, people
                can recognize the character but it's difficult to interpret the
                text as meaningful one. This is the media artwork which a
                meaning of private and public was considered from the relation
                between 8K and smartphone.
            </p>
            <p class="text">
                超高精細フォーマットの8Kはまだ個人で楽しめる環境は少なく、公共空間で楽しむ側面が強い一方、スマートフォンは多くの人々が所有するプライベートの象徴である。
                今回のテーマである8Kとスマートフォンを「パブリックな空間に存在する巨大スクリーン」と「プライベートな手元のデバイス」と捉え、閲覧者が手元のスマートフォンで送ったメッセージがスクリーン上に文字の彫刻として映し出される作品を制作した。
                スクリーンに映し出されるビジュアルでは、個々の文字を認識することは可能だが、意味のある文章として解釈するのは難しい。
                個人の情報が公共の場に出る際のプライベート・パブリックの意味合いを8Kとスマートフォンの関係から考えた作品。
            </p>
            <div class="imgContainer horizontal">
                <div><img src="/img/private_public/2.jpg" alt="" /></div>
                <div><img src="/img/private_public/3.jpg" alt="" /></div>
            </div>
            <div class="imgContainer horizontal">
                <div><img src="/img/private_public/4.jpg" alt="" /></div>
                <div><img src="/img/private_public/5.jpg" alt="" /></div>
            </div>
            <video
                src="/video/private_public/private_public.mp4"
                controls
            ></video>
            <p class="text">
                Material: 8K projector, PC
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
            url: `${process.env.BASE_URL}works/private_public`,
            imageUrl: `${process.env.BASE_URL}img/private_public.jpg`
        }).getMeta();
    }
})
export default class PrivatePublicPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "private_public") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.privatePublicPage
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
