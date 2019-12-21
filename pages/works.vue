<template>
    <div class="worksPage">
        <PageTitle title="Works" />

        <div class="workContainer">
            <WorkItem
                v-for="(work, index) in works.private"
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
    async asyncData() {
        const url: string = `${process.env.BASE_URL}json/works.json`;
        let works: Work[] = [];

        await fetch(url)
            .then((response: Response) => {
                return response.json();
            })
            .then((json: Work[]) => {
                works = json;
            })
            .catch((error: any) => {
                console.log(error);
            });

        return { works };
    }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.worksPage
    .workContainer
        margin-top 20px
</style>
