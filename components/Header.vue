<template>
    <div class="header">
        <div class="logo">
            <n-link to="/">
                <img src="/img/icon.png" alt="ryotatakemoto.com" />
            </n-link>
        </div>
        <ul class="menu">
            <li class="menuItem"><n-link to="/works">Works</n-link></li>
            <li class="menuItem"><n-link to="/about">About</n-link></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {}
})
export default class Header extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.header
    display flex
    padding 20px

    .logo
        a
            width 50px
            height 50px
            display block

            img
                display block
                width 100%
                height 100%
                border-radius 50%

    .menu
        display flex
        align-items center

        .menuItem
            margin-left 20px
</style>
