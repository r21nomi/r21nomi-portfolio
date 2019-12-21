<template>
    <div class="container">
        <Header />
        <nuxt class="contents" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/Header.vue";

@Component({
    components: { Header }
})
export default class extends Vue {}
</script>

<style scoped lang="stylus">
.container
    .contents
        max-width 1100px
        margin 0 auto
        margin-top 50px
        padding-bottom 40px
</style>
