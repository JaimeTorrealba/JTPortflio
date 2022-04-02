<script setup>
import { computed } from 'vue'
const props = defineProps({
    text: { required: true, type: String },
    isBlack: { required: false, type: Boolean, default: true },
    level: { required: false, type: Number, default: 1 },
})
const is = computed(() => {
    switch (props.level) {
        case 1:
            return 'h1'
        case 2:
            return 'h2'
        case 3:
            return 'h3'
        case 4:
            return 'h4'
        case 5:
            return 'h5'

        default:
            return 'h1'
    }
})
</script>
<template>
    <component
        :is="is"
        class="titleBase"
        :class="isBlack ? 'black' : 'white'"
        >{{ text }}</component
    >
</template>

<style lang="scss" scoped>
.titleBase {
    text-align: center;
    margin: var(--large) 0;
}
.black {
    color: var(--black);
}
.white {
    color: var(--black);
}
</style>
