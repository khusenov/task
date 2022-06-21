<template>
    <div class="textarea">
        <p class="textarea-label lg">{{ label }}</p>
        <textarea
            class="textarea-custom"
            :rows="rows"
            :placeholder="placeholder"
            :name="name"
        />
    </div>
</template>

<script>
export default {
    props: ['label', 'placeholder', 'rows', 'name'],
    name: 'Textarea',
};
</script>

<style>
@import './Textarea';
</style>
