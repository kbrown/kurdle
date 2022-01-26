<template>
  <div :name="label">
    Guess: {{ value }}
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        label: {
            type: String,
        },
        value: {
            type: String,
        },
    },
});
</script>


