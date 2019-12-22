<template>
    <div class="worksPage">
        <PageTitle title="WORKS" />

        <div class="workContainer">
            <WorkItem
                v-for="(work, index) in privateWorks"
                :key="index"
                :work="work"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Work } from "~/types/entity";
import WorkItem from "~/components/WorkItem.vue";
import PageTitle from "~/components/PageTitle.vue";

@Component({
    components: { PageTitle, WorkItem }
})
export default class WorksPage extends Vue {
    private get privateWorks(): Work[] {
        return this.$store.state.works.private;
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.worksPage
    .workContainer
        margin-top 50px

        .workItem
            &:nth-child(n + 2)
                margin-top 60px
</style>
