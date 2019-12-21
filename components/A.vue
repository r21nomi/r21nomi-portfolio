<template>
    <a
        href="javascript:void(0)"
        @click="click"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
    >
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class A extends Vue {
    private click(e: Event) {
        this.$emit("onClicked", e);
    }

    private mouseenter() {
        this.$emit("onMouseenter");
    }

    private mouseleave() {
        this.$emit("onMouseleave");
    }
}
</script>
