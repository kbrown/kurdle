<template>
    <div class="board">
        <Guess
            v-for="(row, i) in guesses"
            v-model="guesses[`${rowIdx}`]"
            :key="`row-${i}`"
            :label="`row-${i}`"
            :value="guess"
        />
    </div>
</template>

<script lang="ts">
import Guess from './Guess.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        Guess,
    },
});
</script>

<style scoped>
.reset {
    background: #35495e;
    border: 1px;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    color: white;
}
.board {
    max-width: 25%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 2px;
    row-gap: 10px;
}
</style>