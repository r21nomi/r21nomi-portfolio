<template>
    <div class="container" :class="{ topPage: isTopPage, print: isPrintMode }">
        <Header v-if="!isPrintMode" />
        <nuxt class="contents" />
        <Footer v-if="!isTopPage && !isPrintMode" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import { urlUtil } from "~/util/urlUtil";

@Component({
    middleware: ["redirect"],
    components: { Header, Footer }
})
export default class extends Vue {
    private get isTopPage(): boolean {
        return this.$route.name === "index";
    }

    private get isPrintMode(): boolean {
        return urlUtil.isPrintMode();
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
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

    &.print
        .contents
            margin-top 0
</style>
