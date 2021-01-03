<template>
    <a v-if="isExternal" :href="url" target="_blank">
        <slot></slot>
    </a>
    <n-link v-else :to="url">
        <slot></slot>
    </n-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
    components: {}
})
export default class Link extends Vue {
    @Prop({ required: true }) private url!: String;
    @Prop({ default: true }) private isExternal!: Boolean;
}
</script>
