<template>
    <h1 class="pageTitle">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Prop } from "~/node_modules/nuxt-property-decorator";

@Component({})
export default class PageTitle extends Vue {
    @Prop({ default: "" }) private title!: string;
}
</script>

<style scoped lang="stylus">
.pageTitle
    font-size 2.8rem
    text-align center
</style>
