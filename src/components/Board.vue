<template>
    <div class="board">
        <Square
            v-for="(square, i) in guesses"
            v-model="guesses[`${cellIdx + 1}:${rowIdx + 1}`]"
            :key="`square-${i}`"
            :label="`square-${i}`"
            :value="square"
            @click="markSquare(i)"
        />
    </div>
</template>

<script lang="ts">
import Square from './Square.vue';
import { defineComponent } from 'vue';
import { useBoard } from '../composables/useBoard';
import { useCalculateWinner } from '../composables/useCalculateWinner';
export default defineComponent({
    components: {
        Square,
    },
    setup() {
        const { board, playerValue, markSquare, reset } = useBoard();
        const { calculateWinner } = useCalculateWinner(board);
        return {
            board,
            playerValue,
            markSquare,
            calculateWinner,
            //boardRef,
            reset,
        };
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