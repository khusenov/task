<template>
    <div :class="['input', { input_error: error }]">
        <p class="input-label lg">{{ label }}</p>
        <input
            class="input-custom"
            :placeholder="placeholder"
            :type="type ? type : 'text'"
            :name="name"
        />
    </div>
</template>

<script>
export default {
    props: ['label', 'placeholder', 'name', 'type', 'error'],
    name: 'Input',
};
</script>

<style>
@import './Input';
</style>
