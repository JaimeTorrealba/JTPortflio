<template>
    <div
        class="input-errors"
        v-for="error of validationError"
        :key="error.$uid"
    >
        <div class="error-msg">{{ error.$message }}</div>
    </div>
</template>
<script>
export default {
    props: {
        validationError: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
.input-errors {
    text-align: center;
    padding: var(--small);
}
.error-msg {
    color: var(--error);
    font-size: calc(var(--small) * 1.75);
}
</style>
