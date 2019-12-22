<template>
    <div class="workItem">
        <a class="thumb" :href="work.link" target="_blank">
            <img :src="work.image" alt="" />
        </a>
        <div class="infoContainer">
            <p class="title">
                <a :href="work.link" target="_blank">
                    <TextWithBackground :text="work.title" />
                </a>
            </p>
            <p class="description">
                {{ work.description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Work } from "~/types/entity";
import TextWithBackground from "~/components/TextWithBackground.vue";

@Component({
    components: { TextWithBackground }
})
export default class WorkItem extends Vue {
    @Prop({ required: true }) private work!: Work;
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.workItem
    .thumb
        display block
        img
            width 100%
            display block

    .infoContainer
        padding-left 10px
        padding-right 10px

        .title
            font-size 1.6rem
            font-weight $font_weight_bold
            margin-top 10px

        .description
            font-size 1.2rem
            margin-top 4px
</style>
