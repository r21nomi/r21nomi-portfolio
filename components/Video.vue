<template>
    <video
        v-if="!isPrintMode"
        class="video"
        :autoplay="shouldAutoStart"
        :muted="shouldAutoStart || shouldMute"
        loop
        playsinline
        :controls="showControls"
        :src="url"
        @loadeddata="onDataLoaded"
        @error="onError"
    ></video>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { urlUtil } from "~/util/urlUtil";

@Component({
    components: {}
})
export default class Video extends Vue {
    @Prop({ default: "" }) private url!: string;
    @Prop({ default: false }) private showControls!: boolean;
    @Prop({ default: false }) private shouldAutoStart!: boolean;
    @Prop({ default: true }) private shouldMute!: boolean;

    private isLoading: boolean = true;

    private onDataLoaded() {
        this.isLoading = false;
    }

    private onError(e: any) {
        this.isLoading = false;
        console.log(e.target.error);
    }

    private get isPrintMode(): boolean {
        return urlUtil.isPrintMode();
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/mixin.styl'

.video
    position relative

    video
        width 100%
        height 100%

    .loadingItem
        width 50px
        position absolute
        centerAbsContent()
</style>
