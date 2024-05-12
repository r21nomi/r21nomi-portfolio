<template>
    <div class="cvPage">
        <PageTitle title="CV" />

        <ul class="container">
            <li class="thumb">
                <img src="/img/icon.png" alt="NIINOMI" />
            </li>
            <li class="infoContainer">
                <h2 class="name">NIINOMI</h2>
                <p class="role">Media Artist</p>
                <p class="role2">
                    CEO of
                    <a href="https://neort.io/" target="_blank">
                        <TextWithBackground text="NEORT" /> </a
                    >.
                </p>

                <p class="description">{{ descriptionEn }}</p>
                <p class="description">{{ descriptionJa }}</p>

                <div class="sectionTitle">Exhibitions</div>
                <p class="description exhibitions">{{ exhibitions }}</p>

                <ul class="serviceAccounts">
                    <li class="account twitter">
                        <a
                            href="https://twitter.com/r21nomi_px"
                            target="_blank"
                        >
                            <img
                                src="/img/twitter_icon.png"
                                alt="@r21nomi_px"
                            />
                        </a>
                    </li>
                    <li class="account instagram">
                        <a
                            href="https://www.instagram.com/r21nomi"
                            target="_blank"
                        >
                            <img src="/img/instagram_icon.png" alt="@r21nomi" />
                        </a>
                    </li>
                    <li class="account github">
                        <a href="https://github.com/r21nomi" target="_blank">
                            <img src="/img/github_icon.png" alt="@r21nomi" />
                        </a>
                    </li>
                    <li class="account neort">
                        <a href="https://neort.io/@r21nomi" target="_blank">
                            <img src="/img/neort_icon.png" alt="r21nomi" />
                        </a>
                    </li>
                    <li class="account email">
                        <a href="mailto:info@niinomi.art" target="_blank">
                            <img
                                src="/img/email_icon.png"
                                alt="info@niinomi.art"
                            />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TextWithBackground from "~/components/TextWithBackground.vue";
import PageTitle from "~/components/PageTitle.vue";

@Component({
    components: { PageTitle, TextWithBackground }
})
export default class CVPage extends Vue {
    private get descriptionEn(): string {
        return `Media Artist / CEO of NEORT, Inc.\nNIINOMI explores the possibilities of new art forms that use digital technology, especially programming.\nIn recent years, he has found aesthetic value in the system itself, which continues to output mechanically through algorithms, and produces works under the theme of "System as an Art".`;
    }

    private get descriptionJa(): string {
        return `メディアアーティスト / NEORT株式会社代表。\nプログラムをはじめとするデジタルテクノロジーを駆使した新しいアートの可能性を探求する。\n近年は、アルゴリズムによって機械的に出力をし続けるシステムそのものに美的価値を見出しており、"System as an Art"をテーマに、アートを生成するシステム自体を作品とする活動を行う。`;
    }

    private get exhibitions(): string {
        return [
            "2023.10 MEET YOUR ART FESTIVAL 2023（Tokyo, Tennoze area）",
            "2023.09 art stage OSAKA（Osaka, Grand Cube Osaka）",
            "2023.06 Processing Community Day Tokyo 2023（Tokyo, 8 / CUBE1,2,3）",
            "2023.06 Proof of X（Tokyo, THE FACE DAIKANYAMA）",
            "2023.02 NEW ENERGY（Tokyo, Shinjuku Sumitomo Building）",
            "2023.01 Made in Contract（Tokyo, NEORT++）",
            "2022.04 Proof of X（Tokyo, 3331 Arts Chiyoda）",
            "2021.09 SICF22（Tokyo, Spiral）",
            "2020.07 おさなごころを、きみに 8K作品上映「MADD.作品集」（Tokyo, Museum of Contemporary Art Tokyo）",
            "2019.09 HELLO neo SHIBUYA（Tokyo, Shibuya Station East Exit Plaza）"
        ].join("\n");
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
.cvPage
    .container
        padding 20px
        margin-top 20px

        .thumb
            width 160px
            height 160px
            display block

            img
                display block
                width 100%
                height 100%
                border-radius 50%

        .infoContainer
            .name
                font-size 2.0rem
                margin-top 18px

            .role, .role2
                margin-top 6px

            .description
                white-space pre-wrap
                margin-top 20px

            .sectionTitle
                margin-top 20px

            .exhibitions
                line-height 2.8rem
                margin-top 4px

            .serviceAccounts
                display flex
                margin-top 80px

                .account
                    a
                        width 25px
                        height 25px
                        display block

                        img
                            display block
                            width 100%
                            height 100%
                            border-radius 50%

                    &.email
                        background-color $black_000
                        border-radius 50%
                        text-align center

                        img
                            width 75%
                            height 75%
                            display inline-block
                            vertical-align middle

                    &:nth-child(n + 2)
                        margin-left 14px

        .sectionTitle
            font-size 1.6rem
            font-weight bold
</style>
