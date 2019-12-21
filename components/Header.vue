<template>
    <div class="header">
        <div class="logo">
            <n-link to="/">ryotatakemoto.com</n-link>
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
    flex 1
.menu
    display flex

    .menuItem
        &:nth-child(n + 2)
            margin-left 20px
</style>
