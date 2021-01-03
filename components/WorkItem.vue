<template>
    <div class="workItem">
        <a
            :class="{ nonClickable: !work.link.url }"
            class="thumb"
            :href="work.link.url"
            :target="target"
        >
            <img :src="work.image" alt="" />
        </a>
        <div class="infoContainer">
            <p class="title">
                <a
                    :class="{ nonClickable: !work.link.url }"
                    :href="work.link.url"
                    :target="target"
                >
                    <TextWithBackground :text="work.title" />
                </a>
            </p>
            <p class="description">
                {{ work.description }}
            </p>
            <p class="skill">{{ work.skill }}</p>
            <p class="date">{{ work.date }}</p>
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

    private get target(): string {
        return this.work.link.isExternal ? "_blank" : "_self";
    }
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

        .skill
            font-size 1.1rem
            margin-top 4px

        .date
            font-size 1.1rem
            color $gray_888
            margin-top 4px
</style>
