<template>
    <div class="topPage">
        <video
            v-if="isCurrentArtworkVideo"
            :src="currentArtwork.src"
            autoplay
            muted
            loop
        ></video>
        <iframe v-else :src="currentArtwork.src"></iframe>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ArtworkType } from "~/types/entity";

@Component({
    components: {}
})
export default class TopPage extends Vue {
    private TIMER_DURATION = 60000;
    private currentIndex = 0;
    private timer = null;
    private artworks = [
        {
            type: ArtworkType.WEB,
            src: "artworks/1/current.html"
        }
    ];

    mounted() {
        this.startTimer();
    }

    beforeDestroy() {
        clearTimeout(this.timer);
    }

    private startTimer() {
        this.timer = setTimeout(() => {
            this.changeArtwork();
            this.startTimer();
        }, this.TIMER_DURATION);
    }

    private changeArtwork() {
        this.currentIndex++;
        if (this.currentIndex >= this.artworks.length) {
            this.currentIndex = 0;
        }
    }

    private get isCurrentArtworkVideo(): boolean {
        return this.currentArtwork.type === ArtworkType.VIDEO;
    }

    private get currentArtwork(): any {
        return this.artworks[this.currentIndex];
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.topPage
    iframe, video
        width 100%
        height 100%
        border none
</style>
