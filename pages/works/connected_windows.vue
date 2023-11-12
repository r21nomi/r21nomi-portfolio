<template>
    <div class="connectedWindowsPage">
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
                "Connected Windows" is an artwork that explores the theme of
                connections formed through a collection of NFTs, with the motif
                being computer user interfaces called windows. Within this
                collection, there exist digital creatures called ANIMA, which
                traverse between the windows of NFTs generated within the
                collection. As the number of owners in the collection increases,
                the time ANIMA stays in one window becomes shorter, leaving only
                the windows on the screen. While computer windows serve as
                interfaces for displaying information, in "Connected Windows",
                they also serve as a space for ANIMA to visit. Owning one
                edition in the NFT collection signifies the formation of a loose
                connection with other owners. Becoming an owner of this
                collection means becoming a member who shares ANIMA, and the
                visitation of ANIMA to the window is a testament to the
                formation of these subtle connections.
            </p>
            <p class="text">
                "Connected
                Windows"は、NFTのコレクションを介して形成される繋がりをテーマにした作品で、そのモチーフはコンピューターのユーザーインターフェースであるウィンドウです。このコレクションにはANIMAと呼ばれるデジタル世界の生き物が存在し、コレクション内で生成されたNFTのウィンドウ間を行き来します。コレクションに所有者が増えるにつれ、ANIMAがひとつのウィンドウに留まる時間は短くなり、画面にはウィンドウのみが残されます。コンピューターのウィンドウは情報を表示するためのインターフェースですが、"Connected
                Windows"においてはANIMAが訪れるための場所でもあります。NFTコレクションにおいて1エディションを所有することは他の所有者との緩やかな繋がりの形成を意味します。本コレクションの所有者になることはANIMAを共有する一員になることであり、そのウィンドウに現れるANIMAの来訪は緩やかな繋がりの形成の証なのです。
            </p>
            <Video
                url="/video/connected_windows/connected_windows.mp4"
                :show-controls="true"
            />
            <p class="text">
                Material: displays, microcomputers, pipes, concrete blocks
            </p>
            <p class="text">
                <a
                    href="https://asystem.dev/ja/connected_windows"
                    target="_blank"
                    ><TextWithBackground text="Check the NFT"
                /></a>
            </p>
            <div class="imgContainer">
                <div class="imgInnerContainer horizontal">
                    <div class="img">
                        <img src="/img/connected_windows/pox_main.jpg" alt="" />
                    </div>
                    <div class="img">
                        <img src="/img/connected_windows/pox.jpg" alt="" />
                    </div>
                </div>
            </div>
            <p class="text">
                This work was exhibited at the blockchain x art exhibition
                <a href="https://pox.exhibit.website/" target="_blank"
                    ><TextWithBackground text="Proof of X"/></a
                >, an exhibition of blockchain x art held in Daikanyama, Tokyo
                in 2023.
            </p>
            <p class="text">
                本作は2023年に代官山で開催されたブロックチェーン×アートの展覧会<a
                    href="https://pox.exhibit.website/"
                    target="_blank"
                    ><TextWithBackground text="Proof of X"/></a
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
            url: `${process.env.BASE_URL}works/connected_windows`,
            imageUrl: `${process.env.BASE_URL}img/connected_windows/connected_windows.jpg`
        }).getMeta();
    }
})
export default class ConnectedWindowsPage extends Vue {
    private get work(): Work {
        const works: Work[] = this.$store.state.works.private;
        for (let i = 0; i < works.length; i++) {
            const item = works[i];
            if (item.id === "connected_windows") {
                return item;
            }
        }
        return null;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.connectedWindowsPage
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

                &.horizontal
                    flex-direction row
</style>
