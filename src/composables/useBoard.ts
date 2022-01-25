import { ref, Ref } from 'vue';

export const useBoard = () => {
    const nRows=6;
    const nCols=5;
    const arraySize = nRows*nCols;
    const board: Ref<(string | null)[]> = ref(Array(arraySize).fill(null));
    const playerValue = ref('X');

    const markSquare = (i: number) => {
        const boardCopy = board.value.slice();
        boardCopy[i] = playerValue.value;
        board.value = boardCopy;
        playerValue.value === 'X' ? (playerValue.value = 'O') : (playerValue.value = 'X');
    };

    const reset = () => {
        board.value = Array(arraySize).fill(null);
        playerValue.value = 'X';
    };

    return {
        board,
        markSquare,
        playerValue,
        reset,
    };
};