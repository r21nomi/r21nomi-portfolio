<template>
    <div class="workItem">
        <Link
            :class="{ nonClickable: !work.link.url }"
            class="thumb"
            :url="work.link.url"
            :is-external="work.link.isExternal"
        >
            <img :src="work.image" alt="" />
        </Link>
        <div class="infoContainer">
            <p class="title">
                <Link
                    :class="{ nonClickable: !work.link.url }"
                    :url="work.link.url"
                    :is-external="work.link.isExternal"
                >
                    <TextWithBackground :text="work.title" />
                </Link>
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
import Link from "~/components/Link.vue";
import { Work } from "~/types/entity";
import TextWithBackground from "~/components/TextWithBackground.vue";

@Component({
    components: { Link, TextWithBackground }
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
