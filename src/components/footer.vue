<script>
export default {
    setup() {
        const year = new Date().getFullYear()
        return { year }
    },
}
</script>
<template>
    <div class="footer">Jaime Torrealba - Creative Developer - {{ year }}</div>
</template>
<style lang="scss" scoped>
.footer {
    padding: var(--small);
    color: var(--white);
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;
}
</style>
