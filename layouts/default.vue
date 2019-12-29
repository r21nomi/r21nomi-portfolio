<template>
    <div class="container" :class="{ topPage: isTopPage }">
        <Header />
        <nuxt class="contents" />
        <Footer v-if="!isTopPage" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
    components: { Header, Footer }
})
export default class extends Vue {
    private get isTopPage(): boolean {
        return this.$route.name === "index";
    }
}
</script>

<style scoped lang="stylus">
.container
    .header
        width 100%

    .contents
        max-width 1100px
        margin 0 auto
        margin-top 50px
        padding-bottom 40px

    &.topPage
        .contents
            width 100%
            height 100%
            max-width initial
            position absolute
            top 0
            margin 0
            padding 0
            z-index -1
</style>
