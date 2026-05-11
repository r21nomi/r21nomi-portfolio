<template>
    <div class="root"></div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {}
})
export default class Midtown2026Page extends Vue {
    mounted() {
        window.location.href = "https://painters.niinomi.art/?id=28";
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'
</style>
