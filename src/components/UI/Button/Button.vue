<template>
    <a
        v-if="href"
        :class="['btn', variant, { 'btn-isLoading': isLoading }]"
        :href="href"
        :download="download"
        :target="target"
    >
        <div class="btn-text">
            <slot />
        </div>

        <div class="btn-spinner" v-if="isLoading">
            <span />
        </div>
    </a>
    <RouterLink
        v-else-if="to"
        :class="['btn', variant, { 'btn-isLoading': isLoading }]"
        :type="type"
        :to="to"
    >
        <div class="btn-text">
            <slot />
        </div>

        <div class="btn-spinner" v-if="isLoading">
            <span />
        </div>
    </RouterLink>
    <button
        v-else
        :class="['btn', variant, { 'btn-isLoading': isLoading }]"
        :type="type"
    >
        <div class="btn-text">
            <slot />
        </div>

        <div class="btn-spinner" v-if="isLoading">
            <span />
        </div>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: ['href', 'type', 'download', 'variant', 'target', 'isLoading', 'to'],
};
</script>

<style>
@import './Button';
</style>
