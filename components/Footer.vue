<template>
    <div class="footer">
        <div class="container">© {{ year }} niinomi.art</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TextWithBackground from "~/components/TextWithBackground.vue";

@Component({
    components: { TextWithBackground }
})
export default class Footer extends Vue {
    private get year(): number {
        return new Date().getFullYear();
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.footer
    padding 40px 20px

    .container
        text-align center
</style>
