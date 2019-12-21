<template>
    <div class="work">
        <a class="thumb" :href="work.link" target="_blank">
            <img :src="work.image" alt="" />
        </a>
        <p class="title">
            <a :href="work.link" target="_blank">{{ work.title }}</a>
        </p>
        <p class="description">{{ work.description }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Work } from "~/types/entity";

@Component({
    components: {}
})
export default class WorkItem extends Vue {
    @Prop({ required: true }) private work!: Work;
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.work
    .thumb
        display block
        img
            width 100%
            display block

    .title
        font-size 1.6rem
        margin-top 10px

    .description
        font-size 1.2rem
        margin-top 4px
</style>
