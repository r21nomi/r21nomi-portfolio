<template>
    <span class="textWithBackground">
        {{ text }}
    </span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Prop } from "~/node_modules/nuxt-property-decorator";

@Component({})
export default class TextWithBackground extends Vue {
    @Prop({ default: "" }) private text!: string;
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.textWithBackground
    background linear-gradient(transparent 70%, $accent_yellow 0)
</style>
