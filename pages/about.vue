<template>
    <div class="aboutPage">
        <PageTitle title="ABOUT" />

        <ul class="container">
            <li class="thumb">
                <img src="/img/profile.jpg" alt="Ryota Niinomi Takemoto" />
            </li>
            <li class="infoContainer">
                <h2 class="name">Ryota Takemoto</h2>
                <p class="role">Media Artist</p>
                <p class="role2">
                    CEO of
                    <a href="https://neort.io/" target="_blank"
                        ><TextWithBackground text="NEORT"/></a
                    >.
                </p>

                <p class="description">{{ descriptionEn }}</p>
                <p class="description">{{ descriptionJa }}</p>

                <ul class="serviceAccounts">
                    <li class="account github">
                        <a href="https://github.com/r21nomi" target="_blank">
                            <img src="/img/github_icon.png" alt="@r21nomi" />
                        </a>
                    </li>
                    <li class="account twitter">
                        <a href="https://twitter.com/r21nomi" target="_blank">
                            <img src="/img/twitter_icon.png" alt="@r21nomi" />
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
                    <li class="account neort">
                        <a href="https://neort.io/@r21nomi" target="_blank">
                            <img src="/img/neort_icon.png" alt="r21nomi" />
                        </a>
                    </li>
                    <li class="account email">
                        <a href="mailto:r21nomi@gmail.com" target="_blank">
                            <img
                                src="/img/email_icon.png"
                                alt="r21nomi@gmail.com"
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
export default class AboutPage extends Vue {
    private get descriptionEn(): string {
        return `Create a video expression using programming combined with analog media.\nI explore a possibility of technology and artistic expression in a daily life.`;
    }

    private get descriptionJa(): string {
        return `プログラミングを駆使した映像表現をアナログメディアと組み合わせて行う。\n日常空間における、芸術表現技法としてのテクノロジーの可能性を探求している。`;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
.aboutPage
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

            .serviceAccounts
                display flex
                margin-top 20px

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
</style>
