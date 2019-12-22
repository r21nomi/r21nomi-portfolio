<template>
    <div class="aboutPage">
        <PageTitle title="ABOUT" />

        <ul class="container">
            <li class="thumb">
                <img src="/img/profile.jpg" alt="Ryota Niinomi Takemoto" />
            </li>
            <li class="infoContainer">
                <h2 class="name">Ryota Niinomi Takemoto</h2>
                <p class="role">Digital Art Creator</p>
                <p class="role2">
                    CEO of
                    <a href="https://neort.io/" target="_blank"
                        ><TextWithBackground text="NEORT"/></a
                    >.
                </p>

                <table class="skillInfoContainer">
                    <tr class="outputs">
                        <th>What I can create:</th>
                        <td>Installation / Video / Web / App</td>
                    </tr>
                    <tr class="skills">
                        <th>My skills:</th>
                        <td>
                            TouchDesigner / GLSL / Javascript / Go / Java /
                            Kotlin
                        </td>
                    </tr>
                </table>

                <p class="description">{{ description }}</p>

                <ul class="serviceAccounts">
                    <li class="account github">
                        <a href="https://github.com/r21nomi" target="_blank">
                            <img src="img/github_icon.png" alt="@r21nomi" />
                        </a>
                    </li>
                    <li class="account twitter">
                        <a href="https://twitter.com/r21nomi" target="_blank">
                            <img src="img/twitter_icon.png" alt="@r21nomi" />
                        </a>
                    </li>
                    <li class="account facebook">
                        <a
                            href="https://www.facebook.com/r21nomi"
                            target="_blank"
                        >
                            <img
                                src="img/facebook_icon.png"
                                alt="Ryota Niinomi Takemoto"
                            />
                        </a>
                    </li>
                    <li class="account neort">
                        <a
                            href="https://neort.io/9Bqy2IWae5gAXfMSM4cHStP2dxP2"
                            target="_blank"
                        >
                            <img src="img/neort_icon.png" alt="r21nomi" />
                        </a>
                    </li>
                    <li class="account email">
                        <a href="mailto:r21nomi@gmail.com" target="_blank">
                            <img
                                src="img/email_icon.png"
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
    private get description(): string {
        return `I'm a Digital Art Creator who use programming and some creative tools. \nI can create an installation, interactive art and visual related stuff.`;
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

            .skillInfoContainer
                margin-top 20px

                th
                    color #888
                    font-weight $font_weight_normal

                td
                    padding-left 10px

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
